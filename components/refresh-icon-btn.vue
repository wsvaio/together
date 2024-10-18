<script setup lang="ts">
const i = $ref(0);
</script>

<template>
  <div
    class="i-radix-icons:update" :style="{
      transform: `rotate(${i * 360}deg)`,
      transition: 'transform .3s',
    }" @click="i++"
  />
</template>

<style scoped>

</style>
