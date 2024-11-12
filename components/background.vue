<script setup lang="ts">
import background1 from "~/assets/img/background/1.png";
import background2 from "~/assets/img/background/2.jpg";

const backgrounds = [background1, background2];
let index = $ref(0);
function change() {
  index++;
  if (index >= backgrounds.length)
    index = 0;
}

useIntervalFn(change, 18000);
onMounted(change);
</script>

<template>
  <div
    pos="fixed"
    inset="0"
    :style="{
      background: `url(${backgrounds[index]}) center / cover`,
      transition: 'all 16s steps(16)',
    }"
  />
</template>
