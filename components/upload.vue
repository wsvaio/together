<script lang="ts" setup>
import { filePicker } from "@wsvaio/utils";

let src = $(defineModel<string>({ default: "" }));
let file = $ref<File>();
function handleChange(ev: any) {
  file = ev.target.files?.[0];
  if (!file)
    return;
  src && URL.revokeObjectURL(src);
  src = URL.createObjectURL(file);
}

defineExpose(({
  file: $$(file),
  clear() {
    src && URL.revokeObjectURL(src);
    src = "";
    file = undefined;
  }
}));

onUnmounted(() => {
  src && URL.revokeObjectURL(src);
});
</script>

<template>
  <div pos="fixed" left="50%" top="50%" transform="translate-[-50%]">
    <van-button
      @click="filePicker({
        accept: 'video/*',
        onchange: handleChange,
      })"
    >
      上传视频
    </van-button>
  </div>
</template>
