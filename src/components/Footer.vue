<!-- Footer -->
<template>
  <div class="footer">
    <div class="content">
      <strong>
        <div class="sep10"></div>
        <router-link to="/about">关于</router-link>
        <span class="dot">·</span>
        <router-link to="/help">FAQ</router-link>
      </strong>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Footer extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
.footer {
  width: 100%;
  height: 180px;
  background-color: rgba(255, 242, 226, 0.8);
  border-top: 1px solid #e2e2e2;
  display: flex;
  justify-content: center;
  .content {
    width: 100%;
    a {
      text-decoration: none;
      color: grey;
      margin: 0 15px 0 15px;
    }
  }
}
</style>