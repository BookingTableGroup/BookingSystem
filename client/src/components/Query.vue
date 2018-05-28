<template>
  <section class="container"> <!-- 最外层容器 -->
    <section class="topInfo">
      <top></top>
    </section>
    <nav class="fourNav">
      <navi></navi>
    </nav>
    <section class="content-container"><!-- 内容容器 -->
      <conten></conten>
    </section>
    <section class="bottom">
      <botto></botto>
    </section>
  </section>
</template>

<script>
import top from './query/top.vue'
import navi from './public/navi.vue'
import botto from './public/bottom.vue'
import conten from './query/content.vue'
export default {
  components: {
    top,
    navi,
    conten,
    botto
  }
}
</script>

<style>
   *{
    margin: 0;
    padding: 0;
  }

  .container{
  }

  .topInfo {

  }

  .fourNav, .content-container {

  }

  .bottom {
  }

</style>
