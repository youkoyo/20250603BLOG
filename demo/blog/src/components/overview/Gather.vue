<template>
  <yk-space class="overview" inline>
    <div
      v-for="(item, index) in gathers"
      :key="index"
      class="overview-item"
      :style="{ background: 'linear-gradient(' + item.bgColor + ')' }"
    >
      <div class="overview-item-content">
        <yk-text type="secondary">{{ item.name }}</yk-text>
        <yk-title :level="2">{{ item.total }}</yk-title>
      </div>
      <div class="overview-item-action">
        <yk-button shape="square" type="secondary"><IconPlusOutline /></yk-button>
      </div>
    </div>
  </yk-space>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { overLinks } from "@/utils/menu";
import { overviewData } from "@/mock/data";

const gathers = ref(overLinks);
// 模拟数据
const drawGatherData = () => {
  let data = overviewData.data;
  for (let i = 0; i < gathers.value.length; i++) {
    gathers.value[i].total =
      i == 0 ? data.file : i == 1 ? data.article : i == 2 ? data.gallery : data.diary;
  }
};

onMounted(() => {
  drawGatherData();
  console.log(gathers.value);
});
</script>

<style lang="less" scoped>
.overview {
  width: 100%;
  height: 160px;
}
.overview-item {
  width: 25%;
  height: 100%;
  margin: 0 1em;
  padding: 1em 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #eaea;
  border-radius: 10px;
  .overview-item-content {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .overview-item-action {
    display: flex;
    height: 100%;
    align-items: center;
  }
}
</style>
