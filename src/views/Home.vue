<template>
  <div class="home layout">
    <div class="main card">
      <div class="tabs">
        <router-link to="/hot">热点</router-link>
        <router-link to="/roast">吐槽</router-link>
        <router-link to="/learn">学习</router-link>
        <router-link to="/find">寻觅</router-link>
        <router-link to="/together">有约</router-link>
        <router-link to="/mind">思绪</router-link>
        <router-link to="/secret">树洞</router-link>
      </div>
      <router-view/>
    </div>
    <div class="side">
      <div class="slogan card">
        <div class="cell">
          <strong>Touch me , touch the world</strong>
          <div class="sep"></div>
          <span class="fade">我们在一起</span>
        </div>
        <div class="content">
          <small>这是一个兴趣、日常生活导向的校园社区。我们希望在将来，它能成为大学日常生活的一部分。</small>
        </div>
      </div>
      <Toolbox></Toolbox>
      <div class="tool card">
        <div class="cell">
          <span class="fade">touch小工具</span>
        </div>
        <router-link to="drawer">个人艺术画</router-link>
      </div>
      <div class="feedback card">
        <div class="cell">
          <span class="fade">反馈-举报-优化建议</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Toolbox from '@/components/Toolbox.vue';
@Component({
  components: {
    Toolbox,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';
.home {
  .main {
    .tabs {
      padding: 10px;
      font-size: 14px;
      line-height: 150%;
      text-align: left;
      a {
        text-decoration: none;
        padding: 5px 8px 4px 8px;
        margin-right: 5px;
        border-radius: 3px;
        color: #555;
        &:hover {
          background-color: rgba(167, 167, 222, 0.14);
          color: #778087;
          text-decoration: none;
        }
      }
      .router-link-active {
        background-color: #334;
        color: #fff;
        &:hover {
          background-color: #44445c;
          color: #fff;
        }
      }
    }
  }
  .side {
    .slogan {
      height: 182px;
      .content {
        text-align: left;
      }
    }
    .feedback {
      height: 320px;
    }
    .tool {
      height: 400px;
      a {
        display: inline-block;
        margin-top: 12px;
        cursor: pointer;
        color: #778087;
        background-color: transparent;
        font-size: 13px;
        padding: 3px 8px 3px 8px;
        border-radius: 15px;
        text-decoration: none;
        outline: none;
        border: 1px solid #e5e5e5;
        &:hover {
          color: #555;
          border: 1px solid #ccc;
        }
      }
    }
  }
}
</style>

