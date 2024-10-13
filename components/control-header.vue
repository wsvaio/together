<script setup lang="ts">
defineProps<{
  filename?: string;
}>();
defineEmits(["close"]);
</script>

<template>
  <div
    text="white" flex="~" gap="1em" pos="fixed"
    top="0" right="0" left="0" p="1em"
    items="center"
    style="background: linear-gradient( black, rgba(0, 0, 0, 0))"
  >
    <div>
      {{ filename || "请上传视频" }}
    </div>

    <div flex="1" />
    <div
      v-if="filename"
      class="i-solar:close-circle-linear" text="24px" @click="
        $emit('close')
      "
    />
  </div>
</template>
