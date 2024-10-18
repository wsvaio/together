<script lang="ts" setup>
definePageMeta({
  name: "创建房间",
  layout: "normal"
});

const router = useRouter();
const load = reactive<Record<any, any>>({});

const { execute: submit } = useAsyncData(async () => {
  const room = await $fetch("/api/room", {
    method: "post",
    body: load
  });
  // showSuccessToast("创建成功");
  router.replace(`/room/${room.id}`);
}, {
  immediate: false,
});
</script>

<template>
  <van-form mt="1em" @submit="submit">
    <van-cell-group inset>
      <van-field
        v-model="load.name"
        name="房间名称"
        label="房间名称"
        placeholder="房间名称"
        :rules="[{ required: true, message: '请填写房间名称' }]"
      />
      <van-field name="switch" label="是否公开">
        <template #input>
          <van-switch v-model="load.isPublic" />
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        创建房间
      </van-button>
    </div>
  </van-form>
</template>

<style lang="scss" scoped>

</style>
