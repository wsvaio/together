<script setup lang="ts">
</script>

<template>
  <div
    id="index" max="w-100dvmin" mx="auto" h="100dvh"
    overflow="auto" bg="#eaeae9"
  >
    <van-nav-bar
      left-text="返回" left-arrow :title="$route.meta.name" :fixed="true"
      placeholder safe-area-inset-top
      @click-left="$router.back()"
    />
    <slot />
  </div>
</template>

<style scoped></style>
