<script setup lang="ts">

import {IonPage} from "@ionic/vue";
import Header from "@/components/HeaderComponent.vue";
import Navbar from "@/components/NavbarComponent.vue";
import KostilComponent from "@/components/KostilComponent.vue";
import DonutChartComponent from "@/components/DonutChartComponent.vue";
import {useRoute} from "vue-router";
import {useIonRouter} from "@ionic/vue";

const ionRouter = useIonRouter();

const route = useRoute();

const { id } = route.params;
</script>

<template>
  <ion-page>
    <Header header="Образование" />
    <ion-content>
      <div class="content prosto">
        <h1 class="text-center">Математический анализ</h1>
        <div class="contentc">
          <div class="task">
            <h4 class="task-header text-center">
              Задание на следущую практику
            </h4>
            <p class="text-center">
              Задания задания задания задания помогите помогите ааааааааааааааааааааааааааааааааааааааааааааааааааааааа
            </p>
            <p class="text-end" @click="ionRouter.push(`/edu/courseId/${id}/tasks`, 'forward', 'push')">
              Все задания <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </p>
          </div>
          <div class="chart">
            <DonutChartComponent :percentage="70" :text="'занятий посещено'" />
            <p class="text-end" @click="ionRouter.push(`/edu/courseId/${id}/attendance`, 'forward', 'push')"  >
              Подробнее <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </p>
          </div>
          <div class="chart">
            <DonutChartComponent :percentage="70" :text="'баллов набрано'" />
            <p class="text-end" @click="ionRouter.push(`/edu/courseId/${id}/grades`, 'forward', 'push')"  >
              Подробнее <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </p>
          </div>
        </div>
      </div>
      <KostilComponent />
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>
.chart{
  border-radius: 10px;
  border: solid #000 2px;

}
.text-end{
  text-align: end;
  font-size: 24px;
}
h1{
  font-size: 32px;
}
.content{
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.contentc{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.task{
  background: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5px 25px;
}
.task-header{
  font-size: 24px;

}
</style>