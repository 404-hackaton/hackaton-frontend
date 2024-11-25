<template>
  <div class="chart-container prosto">
    <svg :width="width" :height="height">
      <!-- Фон диаграммы -->
      <rect
          :x="paddingLeft - 10"
          :y="paddingTop - 10"
          :width="chartWidth + 30"
          :height="chartHeight + 30"
          rx="10"
          ry="10"
          fill="#d9d9d9"
      />
      <!-- Горизонтальные линии сетки и метки месяцев -->

      <g>
        <template v-for="(month, index) in months" :key="month">
          <line
              :x1="paddingLeft"
              :y1="yScale(index)"
              :x2="width - paddingRight"
              :y2="yScale(index)"
              stroke="black"
              stroke-width="1"
          ></line>
          <!-- Метка месяца -->
          <text
              :x="paddingLeft - 20"
              :y="yScale(index) + 5"
              text-anchor="end"
              :transform="'rotate(-30,' + (paddingLeft - 30) + ',' + yScale(index) + ')'"
              style="font-size:12px"
          >
            {{ month }}
          </text>
        </template>
      </g>

      <!-- Метки процентов в верхней части -->
      <g>
        <template v-for="percent in percents" :key="percent">
          <text
              :x="xScale(percent)"
              :y="paddingTop - 20"
              text-anchor="middle"
              :transform="'rotate(-45,' + xScale(percent) + ',' + (paddingTop - 30) + ')'"
              style="font-size:12px"
          >
            {{ percent + '%' }}
          </text>
        </template>
      </g>

      <!-- Реальные данные (сплошная линия) -->
      <path
          :d="linePath(actualDataPoints)"
          stroke="#1B98E0"
          stroke-width="2"
          fill="none"
      />

      <!-- Прогнозируемые данные (пунктирная линия) -->
      <path
          :d="linePath(projectedDataPoints)"
          stroke="#1B98E0"
          stroke-width="2"
          fill="none"
          stroke-dasharray="5,5"
      />

      <!-- Точки пересечения -->
      <g>
        <template v-for="(point, index) in actualDataPoints" :key="index">
          <circle
              :cx="point.x"
              :cy="point.y"
              r="5"
              fill="#1B98E0"
          />
        </template>
        <template v-for="(point, index) in projectedDataPoints" :key="index">
          <circle
              :cx="point.x"
              :cy="point.y"
              r="5"
              fill="#1B98E0"
          />
        </template>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});
const data = computed(() => props.data);

const width = computed(() => props.width);
const height = computed(() => props.height);

const months = ['сен', 'окт', 'ноя', 'дек', 'янв', 'фев', 'мар', 'апр', 'май', 'июн'];
const percents = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const paddingLeft = 50;
const paddingRight = 20;
const paddingTop = 45;
const paddingBottom = 30;

const chartWidth = width.value - paddingLeft - paddingRight;
const chartHeight = height.value - paddingTop - paddingBottom;

const xScale = (percent) =>
    paddingLeft + ((percent - 10) / (100 - 10)) * chartWidth;

const yScale = (monthIndex) =>
    paddingTop + (monthIndex / (months.length - 1)) * chartHeight;

const getMonthIndex = (monthName) => months.indexOf(monthName);

// Обработка входных данных
const actualDataPoints = [];
for (let i = 0; i < data.value.length-1; i++) {
  const index = getMonthIndex(data.value[i].month);
  if (index !== -1 ) {
    actualDataPoints.push({
      x: xScale(data.value[i].percent),
      y: yScale(index),
    });
  }
}
const projectedDataPoints = [];
for (let i = data.value.length-2; i < data.value.length; i++) {
  const index = getMonthIndex(data.value[i].month);
  if (index !== -1 ) {
    projectedDataPoints.push({
      x: xScale(data.value[i].percent),
      y: yScale(index),
    });
  }
}



const linePath = (dataPoints) => {
  if (dataPoints.length === 0) return '';
  return dataPoints.reduce(
      (path, point, index) =>
          path + (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`),
      ''
  );
};
</script>

<style scoped>
.chart-container {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

svg {
  background-color: transparent;
}

text {
  font-size: 12px;
  fill: black;
}

line {
  stroke: black;
}
</style>