<script setup lang="ts">

import Header from '../components/HeaderComponent.vue';
import Navbar from '../components/NavbarComponent.vue';
import ScheduleDatepicker from "@/components/ScheduleDatepickerComponent.vue";
import ScheduleItem from "@/components/ScheduleItemComponent.vue";
import BreakSchedule from "@/components/BreakScheduleComponent.vue";
</script>

<template>
  <Header header="Расписание" />
  <div class="content">
    <div class="data flex flex-col justify-center items-center w-full">
      <ScheduleDatepicker />
      <div class="content">
        <ScheduleItem itemId="1" />
        <BreakSchedule breakDuration="10" />
        <ScheduleItem itemId="2" />
      </div>
    </div>
  </div>
  <Navbar />
</template>

<style scoped>

.content{
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>