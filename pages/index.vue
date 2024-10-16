<script setup lang="ts">
const vanFieldRef = $ref<any>();
const user = useUserStore();
</script>

<template>
  <van-nav-bar title="一起看" />
  <div mx="auto" max="w-100dvmin" flex="~ col" gap="1em">
    <van-cell-group flex="~ col" items="center">
      <van-image
        round width="6em" height="6em" fit="cover"
        mt="1em"
      />

      <van-field
        ref="vanFieldRef" v-model="user.nickname" input-align="center" maxlength="16"
        size="large"
        enterkeyhint="done"
      />
    </van-cell-group>

    <van-cell-group inset>
      <van-cell title="本地视频一起看" is-link @click="$router.push('/play')" />
    </van-cell-group>
  </div>
</template>
