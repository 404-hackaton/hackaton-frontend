<script setup lang="ts">
const props = defineProps(['itemId'])
console.log(props.itemId)
</script>

<template>
<div class="schedule-card">
  <h4 class="card-header prosto">Математический анализ</h4>
  <div>

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
}

.card-header{
  font-size: 20px;
}
</style>