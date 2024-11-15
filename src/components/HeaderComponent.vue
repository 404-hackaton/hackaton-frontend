<script setup lang="ts">
const props = defineProps(['header'])
</script>

<template>
  <header class="w-full prosto text-start text-2xl ">
    <h1 class="text-white">
      {{ props.header }}
    </h1>
  </header>

</template>

<style scoped>
header{
  background: #1B98E0;
  padding: 10px 20px 10px 20px;
  font-size: 40px;
}
</style>