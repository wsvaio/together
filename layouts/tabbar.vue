<script setup lang="ts">

</script>

<template>
  <div
    max="w-100dvmin" mx="auto" h="100dvh"
    overflow="auto" bg="#f6f7f9"
  >
    <van-nav-bar :title="$route.meta.name" :fixed="true" placeholder safe-area-inset-top />
    <slot />

    <van-button
      pos="!fixed" left="50%" round type="primary"
      transform="translate-x-[-50%] translate-y-[50%]"
      bottom="50px" z="1000" @click="$router.push('/add')"
    >
      +
    </van-button>
    <van-tabbar :model-value="$route.path" safe-area-inset-bottom placeholder @change="val => $router.push(val)">
      <van-tabbar-item name="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/about" icon="friends-o">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
