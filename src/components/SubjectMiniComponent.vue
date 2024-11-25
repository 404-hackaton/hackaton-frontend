<script setup lang="ts">
const props = defineProps(['courseId'])
</script>

<template>
<div class="component">
  <div class="flex flex-row justify-between">
    <h3 class="prosto block w-fit">Математический анализ</h3>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
    </div>
  </div>
  <div class="grid">
    <div class="grid-item-1 grid-item prosto flex justify-center items-center text-center"><p>Ближайшее задание на 05.11</p></div>
    <div class="grid-item-2 grid-item prosto flex justify-center items-center text-center"><p>70% посещаемость</p></div>
    <div class="grid-item-3 grid-item prosto flex justify-center items-center text-center"><p>70 баллов из 100</p></div>
  </div>
</div>
</template>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap:5px;
}
.grid-item{
  background: #fff;

}
.grid-item-1{
  grid-row-start: 1;
  grid-row-end: 3;
  border-radius: 10px 0 0 10px;
}
.grid-item-2{
  border-radius: 0 10px 0 0;
}
.grid-item-3{
  border-radius: 0 0 10px 0;
}

.component{
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px 20px;
}
h3{
  font-size: 25px;
}
</style>