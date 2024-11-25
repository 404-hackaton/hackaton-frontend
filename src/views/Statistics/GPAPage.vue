<script setup lang="ts">

import LineChartComponent from "@/components/LineChartComponent.vue";
import Header from "@/components/HeaderComponent.vue";
import {IonPage} from "@ionic/vue";
import Navbar from "@/components/NavbarComponent.vue";

const chartData = [
  { month: 'сен', percent: 40 },
  { month: 'окт', percent: 30 },
  { month: 'ноя', percent: 20 },
  { month: 'дек', percent: 50 },
  { month: 'янв', percent: 90 },
  { month: 'фев', percent: 70 },
  { month: 'мар', percent: 60 },
  { month: 'апр', percent: 10 },
  { month: 'май', percent: 80 },
];
</script>

<template>
  <ion-page>
    <Header header="Статистика" />
    <ion-content>
      <div class="content prosto">
        <h1>GPA в течении года</h1>
        <div class="contentc">
          <LineChartComponent :data="chartData" :width="350" :height="500" />
        </div>
      </div>
    </ion-content>
    <Navbar />
  </ion-page>

</template>

<style scoped>
h1{
  font-size: 40px;
  text-align: center;
}
.contentc{
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100vw;
}
</style>