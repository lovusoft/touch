<!-- 学习 -->
<template>
  <div class="learn tab">
    <router-link to="/learn/qa">问&答</router-link>
    <router-link to="/learn/share">分享姿势</router-link>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Learn extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>