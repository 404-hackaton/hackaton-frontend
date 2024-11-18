<script setup lang="ts">

import Header from '../components/HeaderComponent.vue';
import Navbar from '../components/NavbarComponent.vue';
import ScheduleDatepicker from "@/components/ScheduleDatepickerComponent.vue";
import ScheduleItem from "@/components/ScheduleItemComponent.vue";
import BreakSchedule from "@/components/BreakScheduleComponent.vue";

import { IonPage } from '@ionic/vue';
import { ref } from 'vue';

const selectedDate = ref(new Date().toISOString());
const transitionName = ref("slide-left"); // Стандартная анимация
const shouldShowContent = ref(true);

const handleDateChange = (newDate: Date, oldDate: Date) => {
  const newDateObj = new Date(newDate);
  const currentDateObj = new Date(oldDate);
  console.log(newDateObj.toDateString(), currentDateObj.toDateString());
  // Определяем направление
  if (newDateObj > currentDateObj) {
    transitionName.value = "slide-left"; // Переход вперед
    console.log(transitionName.value);
  } else if (newDateObj < currentDateObj) {
    transitionName.value = "slide-right"; // Переход назад
    console.log(transitionName.value);
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
      <div class="content">
        <ScheduleDatepicker @dateChanged="handleDateChange" />
        <transition :name="transitionName">
          <div v-if="shouldShowContent" class="data flex flex-col justify-center items-center w-full">

            <div class="content">
              <ScheduleItem itemId="1" />
              <BreakSchedule breakDuration="10" />
              <ScheduleItem itemId="2" />
            </div>
          </div>
        </transition>
      </div>
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: transform 0.3s ease-in-out;
}

/* Новая позиция начальной и конечной анимации для плавного ухода */
.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

/* Добавляем уход старого дня */
.slide-left-leave-active {
  position: absolute;
  width: 100%;
}

.slide-right-leave-active {
  position: absolute;
  width: 100%;
}

.content {
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

