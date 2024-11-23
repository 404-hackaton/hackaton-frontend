<script setup lang="ts">

import Header from '../components/HeaderComponent.vue';
import Navbar from '../components/NavbarComponent.vue';
import ScheduleDatepicker from "@/components/ScheduleDatepickerComponent.vue";
import ScheduleItem from "@/components/ScheduleItemComponent.vue";
import BreakSchedule from "@/components/BreakScheduleComponent.vue";

import { IonPage } from '@ionic/vue';
import {ref, useTemplateRef} from 'vue';

const selectedDate = ref(new Date().toISOString());
const shouldShowContent1 = ref(true);
const shouldShowContent2 = ref(true);
const shouldShowContent3 = ref(true);

const contentEl = useTemplateRef('contentEl');

const days = ref([
    ["1", "2", "3"],
    ["1", "2", "3"],
    ["1", "2", "3"]
]);

const position = ref("-100vw");
const animation = ref("transform 0.5s ease-in-out");

const getNewDate = (newDate: Date) => {
  const rnewDate = ["1", "2", "4"];
  console.log(rnewDate);
  return rnewDate;
}






const handleDateChange = (newDate: Date, oldDate: Date) => {
  const newDateObj = new Date(newDate);
  const currentDateObj = new Date(oldDate);

  if (newDateObj > currentDateObj) {
    animation.value = "transform 0.5s ease-in-out";
    position.value = "-200vw";


    setTimeout( () =>{
      days.value.shift();
      days.value.push(getNewDate(newDate));
      console.log(days.value);

      animation.value = "none";
      position.value = "-100vw";

    }, 500);



  } else if (newDateObj < currentDateObj) {
    animation.value = "transform 0.5s ease-in-out";
    position.value = "0";


    setTimeout( () =>{
      days.value.pop();
      days.value.unshift(getNewDate(newDate));
      console.log(days.value);

      animation.value = "none";
      position.value = "-100vw";

    }, 500);
  }

  // Добавляем небольшую задержку для работы анимации
  shouldShowContent.value = false;
  setTimeout(() => {
    selectedDate.value = newDate;
    shouldShowContent.value = true;
  }, 0); // Задержка на обновление
};
</script>

<template>
  <ion-page>
    <Header header="Расписание" />
    <ion-content>
      <div class="w-full flex justify-center ">
        <ScheduleDatepicker class="datapick" @dateChanged="handleDateChange" />
      </div>
      <div class="contentc" ref="contentEl">

        <div class="content" v-for="day in days" :key="day[0]">
          <ScheduleItem v-for="item in day" :key="item" />
        </div>
      </div>
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>



.contentc{
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow-x: clip;
  width: 300vw;
  transform: translateX(v-bind(position));
  transition: v-bind(animation);
}

.datapick{
  margin-top: 10px;
  width: 340px;
}


.content {
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}



</style>

