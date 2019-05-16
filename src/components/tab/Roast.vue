<!-- 吐槽 -->
<template>
  <div class="roast tab">
    <router-link to="/roast/today">每日吐槽</router-link>
    <router-link to="/roast/818">818</router-link>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Roast extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>