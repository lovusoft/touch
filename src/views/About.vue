<!-- 关于 -->
<template>
  <div class="about layout">
    <div class="main card">
      <div class="cell">
        <span class="fade">
          <router-link to="/">touch</router-link>
          <span class="chevron">&nbsp;›&nbsp;</span>
          about
        </span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class About extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>