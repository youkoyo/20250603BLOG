<template>
  <yk-space dir="vertical" size="xl">
    <div class="data-card">
      <yk-space justify="between">
        <yk-title :level="4" type="primary">访问量</yk-title>
        <!-- 多选框组件 -->
        <TiAN-radio-group v-model="selectedTab" :tabTitles="tabTitles" />
      </yk-space>
    </div>
    <div class="data-card"></div>
  </yk-space>
</template>

<script setup lang="ts">
import TiANRadioGroup from "@/components/TiAN-Component/TiAN-Radio-Group.vue";
import { ref } from "vue";

const tabTitles = [
  { title: "近一年", value: "year", additional: "12121211111111111111111111111111111" },
  { title: "近3个月", value: "months" },
  { title: "近1个月", value: "month", additional: "请注意啊" },
  { title: "本周", value: "week" },
];

const selectedTab = ref("year"); // 默认选中第一个 tab
</script>

<style scoped lang="less">
.data-card {
  padding: @space-xl;
  border-radius: @radius-m;
  background-color: @bg-color-l;
  width: 100%;
  ::v-deep .yk-title {
    margin-top: 0.5em;
  }
}
</style>
