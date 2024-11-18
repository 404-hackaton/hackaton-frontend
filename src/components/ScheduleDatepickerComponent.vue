<script setup lang="ts">
import { ref, computed } from "vue";
import { IonDatetime } from "@ionic/vue";

const emit = defineEmits(["dateChanged"]);

const isMenuOpened = ref(false);
const currentDate = ref(new Date());

// Форматированная дата и день недели
const formattedDate = ref(
    currentDate.value.toLocaleDateString("ru-RU", { year: "numeric", month: "numeric", day: "numeric" })
);
const weekDay = ref(
    ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][currentDate.value.getDay()]
);

function updateFormattedDate() {
    formattedDate.value = currentDate.value.toLocaleDateString("ru-RU", { year: "numeric", month: "numeric", day: "numeric" });
}
function updateWeekDay() {
    weekDay.value = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][currentDate.value.getDay()];
}

// Изменение даты
const changeDateBy = (days: number) => {
  const oldDate = new Date(currentDate.value);
  currentDate.value.setDate(currentDate.value.getDate() + days);
  updateFormattedDate();
  updateWeekDay();
  emit("dateChanged", new Date(currentDate.value), oldDate);
};

// Обработчик изменения в календаре
const handleCalendarChange = (event: any) => {
  const newDate = new Date(event.detail.value);
  const oldDate = new Date(currentDate.value);
  currentDate.value = newDate;
  updateFormattedDate();
  updateWeekDay();
  emit("dateChanged", newDate, oldDate);
};

const july31 = new Date(2025, 6, 31);
</script>

<template>
  <div class="datapick items-center px-5">
    <div class="flex flex-row w-full justify-between">
      <div @click="changeDateBy(-1)">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </div>
      <div @click="isMenuOpened = !isMenuOpened" class="prosto w-full text-center text-2xl">
        {{ weekDay }} - {{ formattedDate }}
      </div>
      <div @click="changeDateBy(1)">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>
    </div>
    <div v-if="isMenuOpened">
      <ion-datetime
          :first-day-of-week="1"
          @ionChange="handleCalendarChange"
          min="2024-09-01"
          :max="july31.toISOString()"
          v-model="currentDate"
          presentation="date"
          locale="ru-RU"
          displayFormat="DD.MM.YYYY"
      ></ion-datetime>
    </div>
  </div>
</template>

<style scoped>
ion-datetime {
  background: #d9d9d9;
  --wheel-highlight-background: #d9d9d9;
  --wheel-fade-background-rgb: #d9d9d9;
}

.datapick {
  color: black;
  background: #d9d9d9;
  width: 100%;
  margin: 0;
  border-radius: 40px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon {
  fill: black;
}
</style>
