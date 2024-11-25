<script setup lang="ts">

import Header from '../components/HeaderComponent.vue';
import Navbar from '../components/NavbarComponent.vue';
import ScheduleDatepicker from "@/components/ScheduleDatepickerComponent.vue";
import ScheduleItem from "@/components/ScheduleItemComponent.vue";

import {IonPage} from '@ionic/vue';
import {ref, useTemplateRef} from 'vue';
import KostilComponent from "@/components/KostilComponent.vue";

const selectedDate = ref(new Date());

const contentEl = useTemplateRef('contentEl');
const datepickerRef = useTemplateRef('datepickerRef');


const allowDateChange = ref(true);


const days = ref([
  { date: new Date(Date.now() - 24 * 3600 * 1000), items: ["1", "2", "3"] },
  { date: new Date(), items: ["1", "2", "3"] },
  { date: new Date(Date.now() + 24 * 3600 * 1000), items: ["1", "2", "3"] },
]);

setInterval(() => {
  if (days.value.length != 3 && allowDateChange.value) {
    rebuildDaysArray(selectedDate);
  }
}, 1000);


const position = ref("-100vw");
const animation = ref("transform 0.2s ease-in-out");

const getNewDate = (date: Date) => {
  // Replace this logic with actual data retrieval based on the date
  const scheduleItems = ["1", "2", "4", "5", "7"];
  return { date: new Date(date), items: scheduleItems };
};

const handleDateChange = async (newDate: Date, oldDate: Date) => {
  if (!allowDateChange.value) return;

  allowDateChange.value = false;

  selectedDate.value = new Date(newDate);

  const newDateObj = new Date(newDate);
  const currentDateObj = new Date(oldDate);
  const diffInDays = getDiffInDays(newDateObj, currentDateObj);

  if (diffInDays === 0) {
    allowDateChange.value = true;
    return;
  }

  if (days.value.length > 3) {
    rebuildDaysArray(newDateObj);
  } else if (Math.abs(diffInDays) === 1) {
    const direction = diffInDays > 0 ? 1 : -1;
    animateDateChange(direction);
    await updateDaysArray(direction, newDateObj);
  } else {
    resetAnimation();
    rebuildDaysArray(newDateObj);
  }
  allowDateChange.value = true;
};

const getDiffInDays = (newDate: Date, oldDate: Date) => {
  const diffInTime = newDate.getTime() - oldDate.getTime();
  return Math.round(diffInTime / (1000 * 3600 * 24));
};

const animateDateChange = (direction: number) => {
  animation.value = "transform 0.2s ease-in-out";
  position.value = direction === 1 ? "-200vw" : "0";
};

const updateDaysArray = async (direction: number, newDate: Date) => {
  await sleep(200);
  if (direction === 1) {
    days.value.shift();
    days.value.push(getNewDate(newDate));
  } else {
    days.value.pop();
    days.value.unshift(getNewDate(newDate));
  }
  animation.value = "none";
  position.value = "-100vw";
};

const resetAnimation = () => {
  animation.value = "none";
  position.value = "-100vw";
};

const rebuildDaysArray = (newDate: Date) => {
  selectedDate.value = new Date(newDate);
  days.value = [
    {
      date: new Date(newDate.getTime() - 24 * 3600 * 1000),
      items: getNewDate(new Date(newDate.getTime() - 24 * 3600 * 1000)),
    },
    {
      date: newDate,
      items: getNewDate(newDate),
    },
    {
      date: new Date(newDate.getTime() + 24 * 3600 * 1000),
      items: getNewDate(new Date(newDate.getTime() + 24 * 3600 * 1000)),
    },
  ];
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};





// обрабатываем свайпы

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const handleTouchStart = (event: TouchEvent) => {
  if (!allowDateChange.value) {
    return;
  }
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
};

const handleTouchMove = (event: TouchEvent) => {
  if (!allowDateChange.value) {
    return;
  }
  touchEndX = event.touches[0].clientX;
  touchEndY = event.touches[0].clientY;
};

const handleTouchEnd = () => {

  if (allowDateChange.value) {
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

        <div class="content" v-for="(day, index) in days" :key="day.date.getTime() + '-' + index">
          <ScheduleItem v-for="(item, idx) in day.items" :item-id="item" :key="item + '-' + idx" />
        </div>


      </div>
      <KostilComponent />

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

