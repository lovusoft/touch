<!-- Header -->
<template>
  <div class="header">
    <router-link to="/">
      <div class="logo"></div>
    </router-link>
    <div>
      <router-link to="/login">登录</router-link>
      <router-link to="/join">注册</router-link>
      <router-link to="/schoool">学校</router-link>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Header extends Vue {}
</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: 43px;
  position: fixed;
  top: 0;
  background-color: rgba(255, 242, 226, 0.8);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo {
    width: 120px;
    height: 34px;
    background-image: url(../assets/logo.png);
    background-size: cover;
  }
  a {
    text-decoration: none;
    margin-left: 15px;
    color: #555;
    font-size: 14px;
    &:hover {
      color: #778087;
    }
  }
}
</style>