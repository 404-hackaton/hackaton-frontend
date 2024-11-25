<script setup lang="ts">
const props = defineProps(['taskId'])
</script>

<template>
<div class="component">
  <h4>на 11.09</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto in maiores nostrum optio sit soluta ullam. Alias aliquam amet assumenda aut cumque cupiditate deleniti eaque eos fugit harum, id inventore ipsam iure libero magnam non obcaecati perferendis quae quas quasi quia quo rem rerum sit suscipit vitae voluptas voluptatem voluptates.
  </p>
  <div class="w-full flex flex-col items-start">
    <div class="item-desc-content">
      <div class="vr"></div>
      <div class="flex flex-col gap-2">
        <p class="item-desc files-attachment">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M330-240q-104 0-177-73T80-490q0-104 73-177t177-73h370q75 0 127.5 52.5T880-560q0 75-52.5 127.5T700-380H350q-46 0-78-32t-32-78q0-46 32-78t78-32h370v80H350q-13 0-21.5 8.5T320-490q0 13 8.5 21.5T350-460h350q42-1 71-29.5t29-70.5q0-42-29-71t-71-29H330q-71-1-120.5 49T160-490q0 70 49.5 119T330-320h390v80H330Z"/></svg>
          task.pdf
        </p>
      </div>
    </div>
</div>
</div>
</template>

<style scoped>
.component{
  background: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
}
h4{
  text-align: center;
  font-size: 24px;
}
p{
  line-height: 18px;
}
svg{
  display: inline;
}
.item-desc{
  border-bottom: solid 2px #000;
}
</style>