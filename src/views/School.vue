<!-- 学校 -->
<template>
  <div class="school layout">
    <div class="main card">
      <div class="cell">
        <span class="fade">
          <router-link to="/">touch</router-link>
          <span class="chevron">&nbsp;›&nbsp;</span>
          school
        </span>
      </div>
      <div class="items cell">
        <img src="@/assets/cqnu.jpg" alt="img not found" class="avatar">
        <div class="divider"></div>
        <div class="name">
          <strong>
            <router-link to="/">重庆师范大学</router-link>
          </strong>
        </div>
        <div class="principal">
          协调者：
          <strong>
            <router-link to="/">touch</router-link>
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class School extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
.school {
  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .divider {
      width: 10px;
    }
    .avatar {
      width: 48px;
      height: 48px;
    }
    .name {
      flex-grow: 10;
      line-height: 120%;
      padding: 2px 10px 3px 10px;
      a {
        color: #778087;
        text-decoration: none;
        &:hover {
          color: #4d5256;
          text-decoration: underline;
        }
      }
    }
    .principal {
      @extend .name;
      flex-grow: 1;
      color: #ccc;
    }
  }
}
</style>