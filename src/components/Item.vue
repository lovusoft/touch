<!-- List item -->
<template>
  <div class="item cell">
    <router-link to="/">
      <img class="avatar" src="@/assets/avatar.jpg" alt="img not found">
    </router-link>
    <div class="divider"></div>
    <div class="info">
      <span class="title">
        <router-link to="/">List item模块测试</router-link>
      </span>
      <div class="sep"></div>
      <div class="detail">
        <router-link class="node" to="/">问&答</router-link>&nbsp;•&nbsp;
        <strong>
          <router-link to="/">touch</router-link>
        </strong>
        &nbsp;•&nbsp;
        1 分钟前
        &nbsp;•&nbsp;
        最后回复来自&nbsp;
        <strong>
          <router-link to="/">touch</router-link>
        </strong>
      </div>
    </div>
    <div class="divider"></div>
    <div class="reply">
      <router-link to="/">60</router-link>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Item extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
.item {
  display: flex;
  justify-content: space-between;
  .avatar {
    width: 48px;
    height: 48px;
  }
  .divider {
    width: 10px;
  }
  .info {
    flex-grow: 2;
    .title {
      font-size: 16px;
      line-height: 130%;
      text-shadow: 0 1px 0 #fff;
      a {
        color: #778087;
        text-decoration: none;
        &:hover {
          color: #4d5256;
          text-decoration: underline;
        }
      }
    }
    .detail {
      font-size: 12px;
      color: #ccc;
      line-height: 200%;
      @extend .title;
      a {
        font-size: 12px;
        line-height: 12px;
      }
      .node {
        color: #999;
        font-size: 12px;
        line-height: 12px;
        background-color: #f5f5f5;
        padding: 2px 4px 2px 4px;
        border-radius: 2px;
        &:hover {
          background-color: #e2e2e2;
          text-decoration: none;
        }
      }
    }
  }
  .reply {
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      line-height: 12px;
      font-weight: 700;
      color: #fff;
      display: inline-block;
      background-color: #aab0c6;
      padding: 2px 10px 3px 10px;
      border-radius: 12px;
      text-decoration: none;
      margin-right: 5px;
      &:hover {
        background-color: #969cb1;
      }
    }
  }
}
</style>