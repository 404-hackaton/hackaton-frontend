<script setup lang="ts">

import Header from '../components/HeaderComponent.vue';
import Navbar from '../components/NavbarComponent.vue';

import { IonPage } from '@ionic/vue';
import { useRoute } from 'vue-router';
import KostilComponent from "@/components/KostilComponent.vue";
const route = useRoute();

const { id } = route.params;

const lesson_type='lec';
let color='';
let lesson_type_name='';
let lesson_type_name_rp='';
let attendance=0; //0-неуваж 1-уваж 2-был
if (lesson_type == 'lec'){
  color='#9B5DE5'
  lesson_type_name='Лекция'
  lesson_type_name_rp='лекции'
} else if (lesson_type == 'prac'){
  color='#4A7C59'
  lesson_type_name='Практика'
  lesson_type_name_rp='практики'
} else if (lesson_type == 'lab'){
  color='#DB7C26'
  lesson_type_name='Лабараторная'
  lesson_type_name_rp='лабараторной'
}

</script>

<template>
  <ion-page>
    <Header header="Пара" />
    <ion-content >
      <div class="content text-black prosto scroll-auto">
      <div class="data flex flex-col justify-center items-center w-full">
        <div class="lesson-name">
          <h1 class="lesson-header">Математический анализ</h1>
          <p class="card-type" :style="{ background: color}">{{lesson_type_name}}</p>
        </div>
        <hr class="divider">
        <div class="z-20 w-full flex flex-col items-start">
          <h5 class="card-item z-10">
            <svg class="schedule-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            Олег Олегов Олегович
          </h5>
          <h5 class="card-item z-10">
            <svg class="schedule-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"/></svg>
            А-256
          </h5>
          <h5 class="card-item z-10">
            <svg class="schedule-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
            пр-кт Вернадского, 78
          </h5>
          <h5 class="card-item z-10">
            <svg class="schedule-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
            9:00-10:30
          </h5>
          <h5 class="card-item z-10">
            <svg class="schedule-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
            ЭФБО-16-24, ЭФБО-17-24, ЭФБО-18-24
          </h5>
        </div>
        <hr class="divider">
        <div class="w-full flex flex-col items-start">
          <h2 class="item-header">Тема {{lesson_type_name_rp}}</h2>
          <div class="item-desc-content">
            <div class="vr"></div>
            <p class="item-desc">*тема a лекции по учебному плану*(кликабельно, ссылка на тему в уч. плане)</p>
          </div>
        </div>
        <hr class="divider">
        <div class="w-full flex flex-col items-start">
          <h2 class="item-header">Посещение</h2>
          <div class="item-desc-content">
            <div class="vr"></div>
            <div v-if="attendance==0">
              <p class="item-desc">Вы отсутствовали на паре <span class="red-text">без уважительной</span> причины</p>
              <button class="attendance-button text-start">
                Прикрепить документ, подтверждающий причину пропуска
                <svg class="attendance-icon" height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
              </button>
            </div>
            <div v-else-if="attendance==1">
              <p class="item-desc">Вы отсутствали на паре <span class="green-text">по уважительной</span> причине</p>
            </div>
            <div v-else-if="attendance==2">
              <p>Вы <span class="green-text">присутствовали</span> на паре</p>
            </div>
          </div>
        </div>
        <hr class="divider">
        <div class="w-full flex flex-col items-start">
          <h2 class="item-header">Материалы с {{lesson_type_name_rp}}</h2>
          <div class="item-desc-content">
            <div class="vr"></div>
            <div class="flex flex-col gap-2">
              <p class="item-desc files-attachment">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px"  viewBox="0 -960 960 960" width="16px" fill="#000"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                Текст лекции
              </p>
              <p class="item-desc files-attachment">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000"><path d="M240-120v-80h200v-120H160q-33 0-56.5-23.5T80-400v-360q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H520v120h200v80H240Zm-80-280h640v-360H160v360Zm0 0v-360 360Z"/></svg>
                Презентация
              </p>
            </div>
          </div>
        </div>
        <hr class="divider">
        <div class="w-full flex flex-col items-start">
          <h2>Домашнее задание к {{lesson_type_name_rp}}</h2>
          <p class="item-desc">Задание отсутствует</p>
        </div>
      </div>
      </div>
      <KostilComponent />
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>




.files-attachment{
  display: flex;
  gap: 5px;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: black;
}
.attendance-icon{
  fill: black;

}
.attendance-button{
  background: #0bd16f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  max-width: 220px;
  font-size: 12px;
}
.red-text{
  color: #b1110e;
}
.green-text{
  color: #4A7C59;
}
.vr{
  margin: 0 10px;
  width: 2px;
  background: #000;

}
.item-desc-content{
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.item-header{
  font-size: 20px;
}
.item-desc{
  font-size: 16px;
  line-height: 20px;
}
.data{
  gap: 25px;
}
.content{
  padding: 25px 50px;
  overflow-y: scroll;
  padding-bottom:230px !important;
  height: 100%;
}
.divider{
  color: #d6d6d6;
  width: 100%;
  background: #d6d6d6;
}

.lesson-name{
  margin-bottom: 10px;
}
.lesson-header{
  font-size: 32px;
}
.card-item{
  font-size: 14px;
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.schedule-icon{
  fill: black;
  width: 14px;
  height: 14px;
}

.card-type{
  font-size: 12px;
  color: white;
  border-radius: 100px;
  padding: 5px 10px ;
  height: 26px;
  width: fit-content;
}
</style>