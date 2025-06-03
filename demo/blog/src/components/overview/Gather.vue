<template>
  <yk-space class="overview" inline>
    <div v-for="(item, index) in overLinks" :key="index" class="overview-item">
      <yk-text :level="3">{{ item.name }}</yk-text>
      {{ index + 1 }}
    </div>
  </yk-space>
</template>

<script setup lang="ts">
import { overLinks } from "@/utils/menu";
import { overviewData } from "@/mock/data";
</script>

<style scoped></style>
