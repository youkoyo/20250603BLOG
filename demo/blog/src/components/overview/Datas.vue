<template>
  <yk-space dir="vertical" size="xl">
    <div class="data-card">
      <yk-space justify="between">
        <yk-title :level="4" type="primary">访问量</yk-title>
        <!-- 选框组件 -->
        <TiAN-radio-group v-model="selectedTab1" :tabTitles="tabTitles1" />
      </yk-space>
      <!-- 访问量的图表或数据展示 -->
      <Line />
    </div>
    <div class="data-card">
      <yk-space justify="between">
        <yk-title :level="4" type="primary">数据监测</yk-title>
        <!-- 选框组件 -->
        <TiAN-radio-group v-model="selectedTab2" :tabTitles="tabTitles2" />
      </yk-space>
      <Line />
    </div>
  </yk-space>
</template>

<script setup lang="ts">
import TiANRadioGroup from "@/components/TiAN-Component/TiAN-Radio-Group.vue";
import Line from "@/components/echarts/line.vue";
import { ref } from "vue";

const tabTitles1 = [
  { title: "近一年", value: "year", additional: "12121211111111111111111111111111111" },
  { title: "近3个月", value: "months" },
  { title: "近1个月", value: "month" },
  { title: "本周", value: "week" },
];

const tabTitles2 = [
  { title: "近一年", value: "year" },
  { title: "近1个月", value: "month" },
  { title: "本周", value: "week" },
];

const selectedTab1 = ref("year"); // 默认选中第一个 tab
const selectedTab2 = ref("year"); // 默认选中第一个 tab
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
