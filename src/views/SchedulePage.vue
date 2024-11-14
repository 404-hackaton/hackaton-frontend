<script setup lang="ts">

import Header from '../components/HeaderComponent.vue';
import Navbar from '../components/NavbarComponent.vue';
import ScheduleDatepicker from "@/components/ScheduleDatepickerComponent.vue";
</script>

<template>
  <Header header="Расписание" />
  <div class="content">
    <div class="data flex justify-center items-center w-full">
      <ScheduleDatepicker />
    </div>
  </div>
  <Navbar />
</template>

<style scoped>
.data{
  margin-top: 25px;
}
</style>