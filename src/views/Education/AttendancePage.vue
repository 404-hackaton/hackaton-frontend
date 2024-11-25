<script setup lang="ts">

import {IonPage} from "@ionic/vue";
import Header from "@/components/HeaderComponent.vue";
import Navbar from "@/components/NavbarComponent.vue";
import KostilComponent from "@/components/KostilComponent.vue";
import DonutChartComponent from "@/components/DonutChartComponent.vue";


enum attendance_statuses {
  absent='Н',
  excusedAbsent='У',
  attend='+'
}

const attendance_grid = [
  {
    date: new Date(2024, 11, 2),
    attendance_status: attendance_statuses.absent
  },
  {
    date: new Date(2024, 10, 9),
    attendance_status: attendance_statuses.attend
  }
]

attendance_grid.sort()

</script>

<template>
  <ion-page>
    <Header header="Образование" />
    <ion-content>
      <div class="content prosto">
        <h1>Посещения</h1>
        <div class="contentc">
          <div class="chart">
            <DonutChartComponent :percentage="25" :text="'занятий посещено'" />
          </div>
          <div class="attendance-grid">
            <div class="attendance-item" v-for="attendance in attendance_grid">
              <h5 class="text-center">{{attendance.date.getDate()}}.{{attendance.date.getMonth()}}</h5>
              <p class="text-center">{{attendance.attendance_status}}</p>
            </div>
          </div>
        </div>
      </div>
      <KostilComponent />
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>
h1{
  text-align: center;
  font-size: 32px;
}
.contentc{
  padding: 10px 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.chart{
  border-radius: 10px;
  border: solid 2px #000;
}
.attendance-grid{
  background: #d9d9d9;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;

}
.attendance-item{
  border-radius: 10px;
  border: solid 1px #000;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 60px;
  align-self: center;
  justify-self: center;
}
h5{
  font-size: 16px;
}
p{
  font-size: 24px;
}
</style>