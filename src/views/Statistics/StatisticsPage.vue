<script setup lang="ts">

import Header from "@/components/HeaderComponent.vue";
import {IonPage} from "@ionic/vue";
import Navbar from "@/components/NavbarComponent.vue";
import DonutChartComponent from "@/components/DonutChartComponent.vue";
import {useIonRouter} from "@ionic/vue";
const ionRouter = useIonRouter();
</script>

<template>
  <ion-page>
    <Header header="Статистика" />
    <ion-content>
      <div class="content prosto">
        <h1>
          Иванов Иван Иванович
        </h1>
        <div class="contentc">
          <div class="chart-item" @click="ionRouter.push(`/statistics/gpa`, 'forward', 'push')">
            <DonutChartComponent :percentage="25" :text="'GPA по курсам'" />
            <p>Подробнее <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </p>
          </div>
          <div class="chart-item" @click="ionRouter.push(`/statistics/percentel`, 'forward', 'push')">
            <DonutChartComponent :percentage="25" :text="'перцентиль'" />
            <p>Подробнее <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </p>
          </div>
          <div class="chart-item" @click="ionRouter.push(`/statistics/attendance`, 'forward', 'push')">
            <DonutChartComponent :percentage="25" :text="'посещаемость'" />
            <p>Подробнее <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </p>
          </div>

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
}
.chart-item{
  border-radius: 10px;
  border: solid 2px #000;
  padding: 10px;
  width: 300px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
p{
  align-self: end;
}
</style>