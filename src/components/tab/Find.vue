<!-- 寻觅 -->
<template>
  <div class="find tab">
    <router-link to="/find/person">那个人</router-link>
    <router-link to="/find/thing">寻物</router-link>
    <router-link to="/find/found">招领</router-link>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Find extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>