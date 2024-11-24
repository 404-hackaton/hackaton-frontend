<script setup lang="ts">
import { ref, computed, defineExpose } from 'vue';
import { IonDatetime } from "@ionic/vue";

const emit = defineEmits(["dateChanged"]);

const isMenuOpened = ref(false);
const currentDate = ref(new Date().toISOString());
const oldGDate = ref(new Date().toISOString());
const props = defineProps(['disabled']);


// Форматированная дата и день недели
const formattedDate = computed(() => {
  return new Date(currentDate.value).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
});

const weekDay = computed(() => {
  return ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][
      new Date(currentDate.value).getDay()
      ];
});



const changeDateBy = (days: number) => {
  const oldDate = new Date(currentDate.value);
  const newDateObj = new Date(currentDate.value);
  newDateObj.setDate(newDateObj.getDate() + days);
  currentDate.value = newDateObj.toISOString();
  emit("dateChanged", newDateObj, oldDate);
};

const handleCalendarChange = (event: any) => {
  const oldDate = new Date(oldGDate.value);
  const newDate = new Date(event.detail.value);
  oldGDate.value = newDate.toISOString();
  emit("dateChanged", newDate, oldDate);
};


const july31 = new Date(2025, 6, 31).toISOString();

defineExpose({
  changeDateBy,
});
</script>

<template>
  <div class="datapick items-center px-5">
    <div class="flex flex-row w-full justify-between">
      <div @click="!props.disabled && changeDateBy(-1)">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </div>
      <div @click="isMenuOpened = !isMenuOpened" class="prosto w-full text-center text-2xl">
        {{ weekDay }} - {{ formattedDate }}
      </div>
      <div @click="!props.disabled && changeDateBy(1)">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>
    </div>
    <div v-if="isMenuOpened">
      <ion-datetime
          :first-day-of-week="1"
          @ionChange="handleCalendarChange"
          min="2024-09-01"
          :max="july31"
          v-model="currentDate"
          presentation="date"
          locale="ru-RU"
          displayFormat="DD.MM.YYYY"
          :disabled="props.disabled"
      ></ion-datetime>
    </div>
  </div>
</template>

<style scoped>
ion-datetime {
  background: #d9d9d9;
  --wheel-highlight-background: #d9d9d9;
  --wheel-fade-background-rgb: #d9d9d9;
}

.datapick {
  color: black;
  background: #d9d9d9;
  width: 100%;
  margin: 0;
  border-radius: 40px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon {
  fill: black;
}
</style>
