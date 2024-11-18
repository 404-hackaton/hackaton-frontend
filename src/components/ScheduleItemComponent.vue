<script setup lang="ts">
import {useIonRouter} from "@ionic/vue";

const ionRouter = useIonRouter();
const props = defineProps(['itemId'])

const lesson_type='lec';
let color='';
if (lesson_type == 'lec'){ color='#9B5DE5'} else if (lesson_type == 'prac'){ color='#4A7C59'} else if (lesson_type == 'lab'){ color='#DB7C26'}


</script>

<template>
  <div @click="ionRouter.navigate(`/lesson/${props.itemId}`, 'forward', 'push')">
    <div class="schedule-card relative prosto">
      <p class="card-attendance absolute z-10">Н</p>
      <h4 class="card-header z-10">Математический анализ</h4>
      <div class="z-20">
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
      </div>
      <img class="card-image" src="/icons/school_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="">
      <p class="card-type absolute z-10" :style="{ background: color}">Лекция</p>
    </div>
  </div>
</template>

<style scoped>
.schedule-card{
  background: #d6d6d6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: black;
  overflow: hidden;
}

.schedule-icon{
  fill: black;
  width: 14px;
  height: 14px;
}

.card-image{
  bottom: -40px;
  right: -20px;
  position: absolute;
  height: 200px;
  width: 200px;
  z-index: 1;
}

.card-attendance{
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: #FFF;
  border-radius: 5px;
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-item{
  font-size: 14px;
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.card-header{
  font-size: 20px;
  padding-right: 45px;
}

.card-type{
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: white;
  border-radius: 100px;
  padding: 5px 10px ;
  height: 26px;
}
</style>