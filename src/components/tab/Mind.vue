<!-- 思绪 -->
<template>
  <div class="mind tab">
    <router-link to="/mind/share">分享安利</router-link>
    <router-link to="/mind/thx">感谢</router-link>
    <router-link to="/mind/lovu">
      <small style="color:red">❤</small> lovu
    </router-link>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Mind extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>