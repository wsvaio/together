<script setup lang="ts">
definePageMeta({
  name: "关于",
  layout: "tabbar"
});

const user = useUserStore();
</script>

<template>
  <van-cell-group flex="~ col" items="center">
    <van-image
      round width="6em" height="6em" fit="cover"
      mt="1em"
    />

    <van-field
      v-model="user.nickname" input-align="center" maxlength="16"
      size="large"
      enterkeyhint="done"
    />
  </van-cell-group>

  <!-- <van-cell-group inset mt="!1em">
    <van-cell title="疑问" is-link />
    <van-cell title="疑问" is-link />
    <van-cell title="疑问" is-link />
    <van-cell title="疑问" is-link />
  </van-cell-group> -->
</template>

<style scoped>

</style>
