<script setup lang="ts">
import { compressPicture, filePicker, readAs } from "@wsvaio/utils";

definePageMeta({
  name: "关于",
  layout: "tabbar"
});

const user = useUserStore();

async function onchange(ev: InputEvent) {
  let file = (ev.target as any).files?.[0];
  file = await compressPicture(file, { width: 96, height: 96 });
  const baseUrl: string = await readAs("DataURL", file);
  user.avatar = baseUrl;
}

async function handleClick() {
  user.nickname = await $fetch("/api/name");
}
</script>

<template>
  <van-cell-group flex="~ col" items="center">
    <van-image
      round width="96px" height="96px" fit="cover"
      mt="1em" :src="user.avatar"
      @click="filePicker({
        accept: 'image/*',
        onchange,
      })"
    />

    <van-field
      v-model="user.nickname" input-align="center" maxlength="16" size="large"
      enterkeyhint="done" text="!16px"
    />

    <refresh-icon-btn
      pos="absolute" right="1em" top="1em" text="24px gray"
      @click="handleClick"
    />
  </van-cell-group>

  <van-cell-group inset mt="!1em">
    <van-cell title="软件介绍" is-link @click="$router.push('/about/info')" />
    <!-- <van-cell title="使用方式" is-link @click="$router.push('/about/use')" />
    <van-cell title="关于我们" is-link @click="$router.push('/about/us')" /> -->
  </van-cell-group>
</template>

<style scoped></style>
