<script setup lang="ts">
import {ref} from "vue";
const props = defineProps(['percentage', 'text'])
const options = ref({
  colors: ["#1B98E0", "#D9D9D9"],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  states: {
    active: {
      filter: {
        type: 'none' /* none, lighten, darken */
      }
    }
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false
        }
      }
    }
  }

});

const series = ref([props.percentage, 100-props.percentage])



</script>

<template>
<div class="relative">
  <apexchart type="donut" :options="options" :series="series" />
  <h3 class="absolute header prosto">{{props.percentage}}%</h3>
  <h3 class="absolute header1 prosto w-full text-center">{{props.text}}</h3>
</div>
</template>

<style scoped>
.header{
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
}
.header1{
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  font-size: 32px;
  white-space: nowrap;
}

</style>