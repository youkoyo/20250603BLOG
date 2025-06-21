<template>
  <yk-space dir="vertical" class="overview-view" inline>
    <!-- 上下结构 -->
    <yk-title :level="2">总览</yk-title>
    <!-- 总览的4个数据块 -->
    <Gather></Gather>
    <yk-space class="overview-view-content">
      <!-- 左右结构 -->
      <!-- 后台图表视图块 -->
      <Datas style="width: 49%"></Datas>
      <!-- 后台评论视图块 -->
      <Comment style="width: 50%"></Comment>
    </yk-space>
  </yk-space>
</template>

<script setup lang="ts">
import Gather from "@/components/overview/Gather.vue";
import Datas from "@/components/overview/Datas.vue";
import Comment from "@/components/overview/Comment.vue";
</script>

<style scoped lang="less">
.overview-view {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: @bg-color-m;
  .overview-view-content {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>
