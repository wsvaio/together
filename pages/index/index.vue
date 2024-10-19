<script setup lang="ts">
import Banner1 from "~/assets/img/banner1.jpg";
import Banner2 from "~/assets/img/banner2.jpg";

definePageMeta({
  name: "首页",
  layout: "tabbar"
});

const keyword = $ref("");
const value1 = $ref("");
const value2 = $ref("");
const option1 = [
  { text: "全部房间", value: "" },
  { text: "公共房间", value: true },
  { text: "私有房间", value: false },
];
const option2 = [
  { text: "默认排序", value: "" },
  { text: "人数排序", value: "consumer" },
  // { text: "销量排序", value: "c" },
];

const router = useRouter();

const datalist = reactive<any[]>([]);
let page = $ref(1);
const { data, execute, status } = $(useAsyncData(async () => {
  const data = await $fetch(`/api/room/list?page=${page}&name=${keyword}&isPublic=${value1}&orderBy=${value2}`);
  datalist.push(...data?.list);
  return data;
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

onMounted(() => {
  reload();
});

function handleToRoom(item: any) {
  if (!item.isPublic)
    return showToast("该房间设置为不公开，需要分享链接加入");
  router.push(`/room/${item.id}`);
}
</script>

<template>
  <van-field
    v-model="keyword" left-icon="search" placeholder="搜索" pos="sticky!"
    top="46px" z="100"
    enterkeyhint="search" @keypress.enter="reload"
  />
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img :src="Banner1" w="full" h="full" object="contain" />
    </van-swipe-item>
    <van-swipe-item>
      <img :src="Banner2" w="full" h="full" object="contain" />
    </van-swipe-item>
  </van-swipe>

  <van-dropdown-menu pos="sticky!" top="90px" z="10">
    <van-dropdown-item v-model="value1" :options="option1" teleport="body" @change="reload()" />
    <van-dropdown-item v-model="value2" :options="option2" teleport="body" @change="reload()" />
  </van-dropdown-menu>

  <!-- <van-pull-refresh :model-value="status == 'pending'" flex="1" @refresh="reload()"> -->
  <van-list
    v-if="datalist.length" h="50dvh" :loading="status == 'pending'" :finished="noMore"
    finished-text="没有更多了"
    @load="loadmore()"
  >
    <van-cell
      v-for="item in datalist" :key="item.id" :title="item.name" is-link
      :value="item.consumers.length"
      :label="item.isPublic ? '公开' : '不公开'" @click="handleToRoom(item)"
    />
  </van-list>
  <van-empty v-else description="暂无房间，赶快创建一个吧～" />
  <!-- </van-pull-refresh> -->
</template>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;

  text-align: center;
  aspect-ratio: 16/9;
  background-color: white;
}
</style>
