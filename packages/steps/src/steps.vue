<template>
  <div class="c_steps">
    <div class="c_steps_line"></div>
    <div class="c_step"  v-for="index in count" :key="index" :style="{ color: active >= index ? activeColor : defaultColor }">{{ index }}</div>
  </div>
</template>
<script>
export default {
  name: 'c_steps',
  props: {
    // 步骤数量
    count: {
      type: Number,
      default: 3
    },
    // 进行到第几步了
    active: {
      type: Number,
      default: 0
    },
    // 当前步骤高亮颜色
    activeColor: {
      type: String,
      default: 'red'
    },
    // 默认颜色
    defaultColor: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style>
.c_steps {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.c_steps_line {
  position: absolute;
  height: 2px;
  top: 50%;
  left: 24px;
  right: 24px;
  transform: translateY(-50%);
  z-index: 1;
  background: rgb(223, 231, 239);
}

.c_step {
  border: 2px solid;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 2;
  background-color: white;
  box-sizing: border-box;
}
</style>
