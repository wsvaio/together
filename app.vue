<script lang="ts" setup>

</script>

<template>
  <client-only>
    <nuxt-layout>
      <nuxt-page
        :keepalive="{
          exclude: ['room'],
        }"
      />
    </nuxt-layout>
  </client-only>
</template>
