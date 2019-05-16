<!-- 工具箱 -->
<template>
  <div class="toolbox card">
    <button @click="Backward">回退一步</button>
    <button @click="Forward">前进一步</button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Toolbox extends Vue {
  private Forward() {
    this.$router.go(1);
  }
  private Backward() {
    this.$router.go(-1);
  }
}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
.toolbox {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    height: 26px;
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
</style>