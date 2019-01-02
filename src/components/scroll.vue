<template>
  <div
    class="ymu-scroll-wrapper"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchCancel"
    ref="wrapper"
  >
    <div class="ymu-scroll-container" ref="container">
      <div class="ymu-scroll-refresh-indictor">下拉刷新</div>
      <slot></slot>
      <div class="ymu-scroll-pullup-indictor">上拉加载</div>
    </div>
  </div>
</template>

<script>
import { getRect } from '../utils/dom'

export default {
  data () {
    return {
      wrapperStyle: {},
      containerStyle: {},
      wrapperWidth: 0,
      wrapperHeight: 0,
      com
    }
  },
  methods: {
    onTouchStart (event) {
      console.log(event)
    },
    onTouchMove (event) {
      console.log(event)
    },
    onTouchEnd (event) {
      console.log(event)
    },
    onTouchCancel (event) {
      console.log(event)
    },
    /**
     * width, height
     */
    initWrapperRect () {
      const ele = getRect(this.$refs.wrapper)
      this.wrapperWidth = ele.width
      this.wrapperHeight = ele.height
    },
    updateWrapperStyle () {
      const ele = this.$refs.wrapper
      ele.style.width = `${this.wrapperWidth}px`
      ele.style.height = `${this.wrapperHeight}px`
    },
    initContainerRect () {
      const ele = getRect(this.$refs.wrapper)
      this.wrapperWidth = ele.width
      this.wrapperHeight = ele.height
    },
    updateContainerStyle () {
      const ele = getRect(this.$refs.container)
      ele.style.transform = `20px`
    }
  },
  mounted () {
    this.initWrapperRect()
    this.updateWrapperStyle()
  }
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
