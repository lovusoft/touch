<!-- 热点 -->
<template>
  <div class="hot tab">
    <router-link to="/hot/today">今日热点</router-link>
    <router-link to="/hot/week">本周热点</router-link>
    <router-link to="/hot/month">月榜</router-link>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Hot extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>