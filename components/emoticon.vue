<script setup lang="ts">
import type { FieldInstance } from "vant";

defineEmits(["image"]);
const show = defineModel<boolean>();
let q = $ref("");
const vanFieldRef = $ref<FieldInstance>();
const datalist = reactive<string[]>([]);
let page = $ref(1);
let { data, execute, status } = $(useAsyncData(async () => {
  const data = await $fetch(`/api/search?q=${q}&page=${page++}`);
  if (data.code == 200) {
    datalist.push(...data?.list);
    return data;
  }

  else {
    showFailToast(data.ms

    );
    throw new Error(data.msg);
  }
}, {
  immediate: false,
}));
const noMore = computed(() => datalist.length >= (data?.total || 0));
async function loadmore() {
  await execute();
}
async function reload() {
  page = 1;
  datalist.length = 0;
  await loadmore();
}
async function reset() {
  q = "";
  page = 1;
  datalist.length = 0;
  data = null;
}
</script>

<template>
  <van-popup
    v-model:show="show" position="bottom" round z="100"
    @closed="reset"
  >
    <van-list
      h="80dvh" :loading="status == 'pending'" :finished="noMore" finished-text="没有更多了"
      @load="loadmore()"
    >
      <van-field
        ref="vanFieldRef"
        v-model="q" grid="col-span-full" placeholder="搜索" enterkeyhint="search"
        z="100" @keypress.enter="
          reload(),
          vanFieldRef?.blur()
        "
      />

      <div gap="1em" grid="~ cols-[repeat(auto-fill,minmax(16dvmin,1fr))] auto-rows-max">
        <van-image
          v-for="item in datalist" :key="item" :src="item" fit="cover"
          aspect-ratio="1/1"
          @click="$emit('image', item), show = false"
        />
      </div>
    </van-list>
    <!-- <van-empty v-else description="暂无图片" /> -->
  </van-popup>
</template>
