<template>
  <yk-space dir="vertical" class="menu-bar" inline>
    <router-link v-for="(item, index) in menuLinks" :to="item.path" class="menu-item">
      <yk-space align="center" size="m" :key="index">
        <component :is="item.icon"></component>
        <yk-text>{{ item.name }}</yk-text>
      </yk-space>
    </router-link>
  </yk-space>
</template>

<script setup lang="ts">
import { menuLinks } from "@/utils/menu";
</script>

<style scoped lang="less">
.menu-bar {
  width: 160px;
  height: 100%;
  padding: @space-l;
  top: 4em;
  position: fixed;
  left: 8px;
  border-right: 1px solid @gray-1;
  .menu-item {
    width: 100%;
    height: 3em;
    // border: 1px solid #3333330a;
    border-radius: @radius-m;
    // background-color: @bg-color-l;
    padding: 0 @space-l;
    display: flex;
    align-items: center;
    text-decoration: none;
    .yk-icon {
      color: @font-color-ss;
      width: 1.2em;
      height: 1.2em;
    }
    &:hover {
      background-color: @bg-color-l;
      .yk-text {
        font-weight: 600;
      }
    }
  }
  .router-link-active {
    background: linear-gradient(
      180deg,
      rgba(1, 208, 255, 0.745) 0%,
      rgba(76, 0, 255, 0.653) 100%
    );
    .yk-text {
      font-weight: 600;
    }
    .yk-icon {
      color: @bg-color-l;
    }
  }
}
</style>
