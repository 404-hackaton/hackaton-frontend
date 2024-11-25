<script setup lang="ts">

import {IonPage} from "@ionic/vue";
import Header from "@/components/HeaderComponent.vue";
import Navbar from "@/components/NavbarComponent.vue";
import DonutChartComponent from "@/components/DonutChartComponent.vue";

const tests_grid = [
  {
    id: 1,
    name: "Контрольная работа 1",
    format: "Очно",
    date: new Date(2024, 11, 2),
    points: 4,
    max_points: 15
  }
]
</script>

<template>
  <ion-page>
    <Header header="Образование" />
    <ion-content>
      <div class="content prosto">
        <h1>БРС</h1>
        <div class="contentc">
          <div class="chart">
            <DonutChartComponent :percentage="25" :text="'баллов из 100'" />
          </div>
          <div class="grades_grid">
            <div class="grid_item">
              <h5>Посещения</h5>
              <p>Макс. 30Б</p>
            </div>
            <div class="grid_item g2">
              <h5>Текущий контроль</h5>
              <p>Макс. 40Б</p>
            </div>
            <div class="grid_item g3">
              <h5>Семестровый контроль</h5>
              <p>Макс. 20Б</p>
            </div>
            <div class="grid_item">
              <h5>Достижения</h5>
              <p>Макс. 10Б</p>
            </div>
            <div class="grid_item g5">
              <h5>Итого</h5>
              <p>Макс. 100Б</p>
            </div>
          </div>
          <div>
            <h3>Текущий контроль</h3>
            <table class="w-full">
              <thead>
                <tr>
                  <th>Наименование</th>
                  <th>Формат</th>
                  <th>Дата</th>
                  <th>Баллы</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="test in tests_grid" :key="test.id">
                  <td>{{test.name}}</td>
                  <td>{{test.format}}</td>
                  <td>{{test.date.getDate()}}.{{test.date.getMonth()}}.{{test.date.getFullYear()}}</td>
                  <td>{{test.points}}/{{test.max_points}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>
table{
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 6px;
}

th {
  vertical-align: bottom;
}

.content{
  padding: 20px 0;
}
h1{
  text-align: center;
  font-size: 32px;
}
h3{
  text-align: center;
  font-size: 24px;
  margin: 10px 0;
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

.grades_grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 0.28fr 1fr 1fr;
  gap: 10px;

}
.grid_item{
  display: flex;
  flex-direction: column;
  background: #d9d9d9;
  padding: 10px;
}
.g2{
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
}
.g3{
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 1;
}
.g5{
  grid-column-start: 1;
  grid-column-end: 3;
}
h5{
  font-size: 20px;
  text-align: center;
}
p{
  font-size: 16px;
  text-align: center;
}
</style>