<script setup lang="ts">
import {ref} from "vue";

const isMenuOpened = ref(false);

import { IonDatetime } from "@ionic/vue";



</script>

<template>
  <div class="datapick items-center px-5">
    <div class="flex flex-row justify-between" @click="isMenuOpened = !isMenuOpened">
      <div><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></div>
      <div class="prosto text-2xl">Среда, 13 ноября</div>
      <div><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></div>
    </div>
    <div v-if="isMenuOpened">
      <ion-datetime  presentation="date" formControlName="picker" id="picker" displayFormat="DD/MM/YYYY"></ion-datetime>
    </div>
  </div>
</template>

<style scoped>
ion-datetime{
  background: #D9D9D9;
}
  .datapick{
    color:black;
    background:#D9D9D9;
    width: 100%;
    margin: 0 40px;
    border-radius:40px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .icon {
    fill: black; /* Задаёт чёрный цвет заливки для иконки */
  }

</style>