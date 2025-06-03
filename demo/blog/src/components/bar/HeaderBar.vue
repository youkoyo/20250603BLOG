<template>
  <div>
    <div class="header-bar">
      <div class="logo" @click="handleLogoClick()">
        <img src="../../assets/logo_TiAN.png" alt="网站logo" />
      </div>
      <div class="login-info">
        <yk-space align="center" :size="'2em'">
          <!-- 头像 -->
          <yk-avatar
            size="m"
            style="background-color: hsl(198deg 90% 54%); cursor: pointer"
          >
            yoyo
          </yk-avatar>
          <!-- 私信 -->
          <yk-badge :count="100">
            <IconMailOutline class="icon" />
          </yk-badge>
          <!-- 网站主题色 -->
          <div class="theme">
            <yk-theme />
          </div>
          <!-- 登录/登出 按钮 -->
          <yk-button shape="circle"><IconPlusOutline /></yk-button>
        </yk-space>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

// 点击logo跳转到首页
const router = useRouter();
const handleLogoClick = () => {
  router.push("/");
};
</script>

<style scoped lang="less">
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4em;
  background-color: @bg-color-ss;
  box-shadow: 0 2px 4px rgba(0, 21, 41, 0.1);
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 0.5em 0 0.5em 1em;
    max-height: 100%;
    img {
      max-height: 100%;
      cursor: pointer;
    }
  }
  .login-info {
    padding: 0.5em 1em 0.5em 0;
    max-height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    .icon {
      font-size: 1.5em !important;
      cursor: pointer;
    }
  }
}
</style>
