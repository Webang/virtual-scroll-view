<template>
  <div class="demo-simple">
    <Scroll>
      <ul>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
        <li>new vue demo</li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '../../src/components/scroll.vue'
export default {
  components: {
    Scroll
  }
}
</script>

<style scoped>
ul, li {
  list-style: none;
}

li {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
