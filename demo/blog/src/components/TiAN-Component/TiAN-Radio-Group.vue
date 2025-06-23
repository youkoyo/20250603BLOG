<template>
  <!-- 组件容器 -->
  <div class="container">
    <!-- 单选按钮组容器 -->
    <div class="radio-group">
      <!-- 遍历每个标签项 -->
      <div
        v-for="(item, index) in props.tabTitles"
        :key="item.value"
        class="radio-item"
        :style="{ width: props.tabWidth, height: '30px' }"
      >
        <!-- 隐藏的单选按钮 -->
        <input
          :id="'radio-' + index + '-' + TIMESTAMP"
          :name="'radio-' + index + '-' + TIMESTAMP"
          type="radio"
          :value="item.value"
          :checked="props.modelValue === item.value"
          @change="handleChange(item.value)"
        />
        <!-- 单选按钮的标签 -->
        <label
          :for="'radio-' + index + '-' + TIMESTAMP"
          class="radio"
          :class="{ active: props.modelValue === item.value }"
        >
          <!-- 标签标题 -->
          {{ item.title }}
          <!-- 通知徽章（附加内容） -->
          <span
            v-if="item.additional"
            class="notification"
            @mouseenter="showTooltip($event, item.additional)"
            @mouseleave="hideTooltip"
          >
            <!-- 截断显示的附加内容 -->
            {{ truncateText(item.additional, 4) }}
          </span>
        </label>
      </div>
      <!-- 滑块指示器 -->
      <span
        class="glider"
        :style="{
          transform: `translateX(${selectedTabIndex * 100}%)`, // 动态计算位置
          width: props.tabWidth, // 动态设置宽度
        }"
      ></span>
    </div>

    <!-- 自定义Tooltip提示框 -->
    <div
      v-if="tooltip.visible"
      class="custom-tooltip"
      :style="{
        top: tooltip.y + 'px', // 动态设置垂直位置
        left: tooltip.x + 'px', // 动态设置水平位置
      }"
    >
      <!-- 显示完整提示内容 -->
      {{ tooltip.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入Vue Composition API
import { computed, ref } from "vue";

/**
 * 定义组件的props
 * @property {Array} tabTitles - 标签数据数组，包含标题、值和附加内容
 * @property {Object} modelValue - 当前选中的值
 * @property {String} tabWidth - 标签宽度（可选，默认'80px'）
 */
const props = withDefaults(
  defineProps<{
    tabTitles: {
      title: string; // 标签显示的文本
      value: string; // 标签对应的值
      additional?: string; // 附加内容（可选）
    }[];
    modelValue: string; // 当前选中的值
    tabWidth?: string; // 标签宽度
  }>(),
  {
    tabWidth: "80px", // 默认宽度
  }
);

/**
 * 时间戳常量
 */
const TIMESTAMP = new Date().getTime();

/**
 * 定义组件的事件
 * @event update:modelValue - 当选中项改变时触发
 */
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

/**
 * Tooltip状态管理
 * @property {Boolean} visible - 是否显示Tooltip
 * @property {String} content - Tooltip显示的内容
 * @property {Number} x - Tooltip的水平位置
 * @property {Number} y - Tooltip的垂直位置
 */
const tooltip = ref({
  visible: false,
  content: "",
  x: 0,
  y: 0,
});

/**
 * 显示Tooltip提示
 * @param {MouseEvent} event - 鼠标事件对象
 * @param {String} content - 要显示的内容
 */
const showTooltip = (event: MouseEvent, content: string) => {
  // 设置Tooltip位置（鼠标位置+10px偏移）
  tooltip.value = {
    visible: true,
    content,
    x: event.clientX + 10,
    y: event.clientY + 10,
  };
};

/**
 * 隐藏Tooltip提示
 */
const hideTooltip = () => {
  tooltip.value.visible = false;
};

/**
 * 文本截断函数
 * @param {String} text - 原始文本
 * @param {Number} maxLength - 最大显示长度
 * @returns {String} 截断后的文本（超过长度显示...）
 */
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

/**
 * 计算当前选中标签的索引
 * @returns {Number} 选中标签的索引
 */
const selectedTabIndex = computed(() =>
  props.tabTitles.findIndex((radio) => radio.value === props.modelValue)
);

/**
 * 处理标签切换事件
 * @param {String} value - 选中的新值
 */
const handleChange = (value: string) => {
  // 触发update:modelValue事件更新父组件
  emit("update:modelValue", value);
};
</script>

<style scoped lang="less">
/* 组件容器样式 */
.container {
  position: relative; /* 相对定位，为Tooltip提供定位上下文 */
  max-width: fit-content;
}

/* 单选按钮组容器样式 */
.radio-group {
  display: flex; /* 使用Flex布局 */
  position: relative; /* 相对定位 */
  background-color: @bg-color-s; /* 背景色（Less变量） */
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
    /* 阴影效果 */ 0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.25rem; /* 内边距 */
  border-radius: 12px; /* 圆角 */
}

/* 提升内部元素层级 */
.radio-group > * {
  z-index: 2; /* 确保在滑块上方 */
}

/* 隐藏原生单选按钮 */
input[type="radio"] {
  display: none; /* 不显示原生单选按钮 */
}

/* 单选按钮标签样式 */
.radio {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  height: 100%; /* 高度100%填充父容器 */
  width: 100%; /* 宽度100%填充父容器 */
  font-size: 0.8rem; /* 字体大小 */
  color: @font-color-l; /* 文字颜色（Less变量） */
  font-weight: 500; /* 字体粗细 */
  border-radius: 99px; /* 圆形按钮效果 */
  cursor: pointer; /* 手型光标 */
  transition: color 0.15s ease-in; /* 颜色过渡动画 */
  position: relative; /* 相对定位 */
  user-select: none; /* 禁止文本选择 */
  -webkit-user-select: none; /* Safari兼容 */
  -moz-user-select: none; /* Firefox兼容 */
}

/* 单选按钮项样式 */
.radio-item {
  padding: 0 0.55rem 0 0; /* 右侧间距 */
}

/* 通知徽章样式 */
.notification {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  min-width: 1.5rem; /* 最小宽度 */
  height: 1rem; /* 高度 */
  padding: 0 0.25rem; /* 内边距 */
  position: absolute; /* 绝对定位 */
  top: -0.5rem; /* 向上偏移 */
  right: -0.5rem; /* 向右偏移 */
  font-size: 0.65rem; /* 字体大小 */
  border-radius: 0.8rem; /* 圆角 */
  background-color: #e6eef9; /* 背景色 */
  transition: all 0.15s ease-in; /* 过渡动画 */
  user-select: none; /* 禁止文本选择 */
  -webkit-user-select: none; /* Safari兼容 */
  -moz-user-select: none; /* Firefox兼容 */
  max-width: 4.5rem; /* 最大宽度 */
  overflow: hidden; /* 内容溢出时隐藏 */
  white-space: nowrap; /* 禁止换行 */
  text-overflow: ellipsis; /* 显示省略号 */
}

/* 选中/激活状态的标签样式 */
.radio.active,
input[type="radio"]:checked + .radio {
  color: #185ee0; /* 激活状态文字颜色 */
}

/* 选中/激活状态的通知样式 */
.radio.active .notification,
input[type="radio"]:checked + .radio .notification {
  background-color: #185ee0; /* 激活状态背景色 */
  color: #fff; /* 白色文字 */
}

/* 滑块样式 */
.glider {
  position: absolute; /* 绝对定位 */
  height: 30px; /* 高度 */
  background-color: #e6eef9; /* 背景色 */
  z-index: 1; /* 层级在标签下方 */
  border-radius: 8px; /* 圆角 */
  transition: transform 0.15s ease-out; /* 移动过渡动画 */
}

/* 响应式调整 - 小屏幕适配 */
@media (max-width: 700px) {
  .radio-group {
    transform: scale(0.6); /* 整体缩放 */
    transform-origin: center; /* 缩放中心点 */
  }
}

/* 自定义Tooltip样式 */
.custom-tooltip {
  position: fixed; /* 固定定位 */
  z-index: 9999; /* 最高层级 */
  background-color: rgba(0, 0, 0, 0.85); /* 半透明黑色背景 */
  color: white; /* 白色文字 */
  padding: 6px 12px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  font-size: 0.8rem; /* 字体大小 */
  pointer-events: none; /* 不响应鼠标事件 */
  max-width: 300px; /* 最大宽度 */
  word-wrap: break-word; /* 允许单词换行 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* 阴影效果 */
  animation: fadeIn 0.2s ease-out; /* 淡入动画 */
}

/* 淡入动画关键帧 */
@keyframes fadeIn {
  from {
    opacity: 0; /* 初始透明度0 */
    transform: translateY(5px); /* 初始位置下移 */
  }
  to {
    opacity: 1; /* 完全显示 */
    transform: translateY(0); /* 回到原位 */
  }
}
</style>
