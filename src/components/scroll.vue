<template>
  <div class="ymu-scroll-wrapper">
    <div class="ymu-scroll-container">
      <div class="ymu-scroll-refresh-indictor">下拉刷新</div>
      <slot></slot>
      <div class="ymu-scroll-pullup-indictor">上拉加载</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.ymu-scroll-wrapper {
  overflow: hidden;
  height: 500px;
}

.ymu-scroll-container {
  height: 1000px;
}

.ymu-scroll-refresh-indictor {
  height: 50px;
  line-height: 50px;
}

.ymu-scroll-pullup-indictor {
  height: 50px;
  line-height: 50px;
}
</style>
