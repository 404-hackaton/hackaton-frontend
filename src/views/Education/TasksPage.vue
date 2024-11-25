<script setup lang="ts">

import {IonPage} from "@ionic/vue";
import Header from "@/components/HeaderComponent.vue";
import Navbar from "@/components/NavbarComponent.vue";
import KostilComponent from "@/components/KostilComponent.vue";
import SingleTaskComponent from "@/components/SingleTaskComponent.vue";

const tasksIds = ['1', '2', '3']
</script>

<template>
  <ion-page>
    <Header header="Образование" />
    <ion-content>
      <div class="prosto content flex flex-col gap-2">
        <h1>Задания</h1>
        <div class="contentc">
          <SingleTaskComponent v-for="taskId in tasksIds" :taskId="taskId" :key="taskId" />
        </div>
      </div>
      <KostilComponent />
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>
h1{
  font-size: 32px;
  text-align: center;
}
.content{
  padding: 20px 35px;
  gap: 10px;
}
.contentc{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>