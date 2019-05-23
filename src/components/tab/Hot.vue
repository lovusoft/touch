<!-- 热点 -->
<template>
  <div class="hoy">
    <div class="tab">
      <a href="/hot/today">今日热点</a>
      <router-link to="/hot/week">本周热点</router-link>
      <router-link to="/hot/month">月榜</router-link>
    </div>
    <Item v-for="i in 6" :key="i"></Item>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import Item from '@/components/Item.vue';
@Component({
  components: {
    Item,
  },
})
export default class Hot extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>