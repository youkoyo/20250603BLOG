<template>
  <yk-space dir="vertical" class="overview-view" inline>
    <yk-title :level="2">总览</yk-title>
    <Gather></Gather>
  </yk-space>
</template>

<script setup lang="ts">
import Gather from "@/components/overview/Gather.vue";
</script>

<style scoped></style>
