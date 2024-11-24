<script setup lang="ts">

import Header from '../components/HeaderComponent.vue';
import Navbar from '../components/NavbarComponent.vue';
import ScheduleDatepicker from "@/components/ScheduleDatepickerComponent.vue";
import ScheduleItem from "@/components/ScheduleItemComponent.vue";
import BreakSchedule from "@/components/BreakScheduleComponent.vue";

import { IonPage } from '@ionic/vue';
import {ref, useTemplateRef} from 'vue';

const selectedDate = ref(new Date().toISOString());

const contentEl = useTemplateRef('contentEl');
const datepickerRef = useTemplateRef('datepickerRef');


const allowDateChange = ref(true);


const days = ref([
  { date: new Date(Date.now() - 24 * 3600 * 1000), items: ["1", "2", "3"] },
  { date: new Date(), items: ["1", "2", "3"] },
  { date: new Date(Date.now() + 24 * 3600 * 1000), items: ["1", "2", "3"] },
]);


const position = ref("-100vw");
const animation = ref("transform 0.5s ease-in-out");

const getNewDate = (date: Date) => {
  // Replace this logic with actual data retrieval based on the date
  const scheduleItems = ["1", "2", "4", "5", "7"];
  return scheduleItems;
};







const handleDateChange = (newDate: Date, oldDate: Date) => {
  if (!allowDateChange.value) {
    return;
  }
  allowDateChange.value = false;

  const newDateObj = new Date(newDate);
  const currentDateObj = new Date(oldDate);

  const diffInTime = newDateObj.getTime() - currentDateObj.getTime();
  const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

  console.log(newDateObj.getTime(), currentDateObj.getTime());

  if (diffInDays === 0) {
    // No date change
    allowDateChange.value = true;
    return;
  }

  if (Math.abs(diffInDays) === 1) {
    if (diffInDays > 0) {
      animation.value = "transform 0.5s ease-in-out";
      position.value = "-200vw";

      setTimeout(() => {
        days.value.shift();
        days.value.push(getNewDate(newDateObj));
        animation.value = "none";
        position.value = "-100vw";
        allowDateChange.value = true;
      }, 500);
    } else {
      animation.value = "transform 0.5s ease-in-out";
      position.value = "0";

      setTimeout(() => {
        days.value.pop();
        days.value.unshift(getNewDate(newDateObj));
        animation.value = "none";
        position.value = "-100vw";
        allowDateChange.value = true;
      }, 500);
    }
  } else {
    animation.value = "none";
    position.value = "-100vw";

    days.value = [
      {
        date: new Date(newDateObj.getTime() - 24 * 3600 * 1000),
        items: getNewDate(new Date(newDateObj.getTime() - 24 * 3600 * 1000)),
      },
      {
        date: newDateObj,
        items: getNewDate(newDateObj),
      },
      {
        date: new Date(newDateObj.getTime() + 24 * 3600 * 1000),
        items: getNewDate(new Date(newDateObj.getTime() + 24 * 3600 * 1000)),
      },
    ];
    allowDateChange.value = true;
  }
};


// обрабатываем свайпы

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
};

const handleTouchMove = (event: TouchEvent) => {
  touchEndX = event.touches[0].clientX;
  touchEndY = event.touches[0].clientY;
};

const handleTouchEnd = () => {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX > 0) {
      // Свайп вправо
      changeDateBy(-1);
    } else {
      // Свайп влево
      changeDateBy(1);
    }
  }
};

const changeDateBy = (days: number) => {
  if (!allowDateChange.value) {
    return;
  }
  datepickerRef.value.changeDateBy(days);
};



</script>

<template>
  <ion-page>
    <Header header="Расписание" />
    <ion-content>
      <div class="w-full flex justify-center ">
        <ScheduleDatepicker ref="datepickerRef" class="datapick" :disabled="!allowDateChange" @dateChanged="handleDateChange" />
      </div>
      <div class="contentc" ref="contentEl"
           @touchstart="handleTouchStart"
           @touchmove="handleTouchMove"
           @touchend="handleTouchEnd"
      >

        <div class="content" v-for="day in days" :key="day.date.toISOString()">
          <ScheduleItem v-for="item in day.items" :key="item" />
        </div>

      </div>
      <div class="absolute top-0 left-0 w-full h-full -z-10">
        <button class="w-full h-full bg-white text-white">a</button>
      </div>
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>

ion-content{
  overflow-x: hidden !important;
}


.contentc{
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow-x: hidden !important;
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

