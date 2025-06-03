<template>
  <div class="index-view">
    <!-- 左侧菜单 -->
    <MenuBar></MenuBar>
    <!-- 右侧内容 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import MenuBar from "@/components/bar/MenuBar.vue";
</script>

<style scoped lang="less">
.index-view {
  padding-left: 200px;
}
</style>
