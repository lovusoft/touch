<!-- 艺术画 -->
<template>
  <div class="drawer layout">
    <div class="main card">
      <div class="cell">
        <span class="fade">
          <router-link to="/">touch</router-link>
          <span class="chevron">&nbsp;›&nbsp;</span>
          Drawer
        </span>
      </div>
      <div class="content">
        <div class="buttons">
          <div>
            <label for="fileSelect">选择图片</label>
            <input
              type="file"
              id="fileSelect"
              class="uploadInput"
              ref="fileSelect"
              @change="selectImage"
              accept="image/*"
            >
          </div>
          <div>
            <label for="size">多边形数量</label>
            <input type="number" min="0" id="size" v-model="num" placeholder="请输入正整数">
          </div>
          <div>
            <label for="size">多边形类型</label>
            <input type="number" min="0" max="8" v-model="type" id="type" placeholder="请输入0-8正整数">
          </div>
          <div>
            <label for="upload">上传</label>
            <input type="button" id="upload" class="uploadInput" @click="upload">
          </div>
        </div>
        <img :src="src" width="320" id="upimg">
        <div class="loading" v-if="loading">
          <img src="@/assets/loading.png">
          作图中，请稍等
        </div>
      </div>
      <small>多边形数量越多，绘制时间越长，请不要轻易尝试5201314这种数字，会真的到天荒地老</small>
      <br>
      <small>0 =组合，1 =三角形，2 =矩形，3 =椭圆形，4 =圆形，5 =旋转直线，6 =贝塞尔曲线，7 =旋转椭圆，8 =多边形</small>
      <br>
      <small>如果长时间没反应，一般来说是服务器挂了~，多试几次或者把多边形数量减少一点</small>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Drawer extends Vue {
  private num: string = '30';
  private type: string = '0';
  private src: any = '';
  private file: any;
  private loading: boolean = false;
  private selectImage() {
    const fileSelect = this.$refs.fileSelect as HTMLFormElement;
    this.src = window.URL.createObjectURL(fileSelect.files[0]);
    this.file = fileSelect.files[0];
  }
  private upload() {
    if (this.src === '' || this.src === undefined) {
      alert('请选择图片');
    } else {
      this.loading = true;
      const form = new FormData();
      form.append('img', this.file);
      form.append('size', this.num);
      form.append('type', this.type);
      this.axios.post('drawer', form).then((res) => {
        this.src = 'data:image/png;base64,' + res;
        this.loading = false;
      });
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
small {
  color: #c1c1c1;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  .loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #19d064;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgba(29, 29, 29, 0.8);
    img {
      animation: xz 2s linear infinite;
    }
    @keyframes xz {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    label {
      cursor: pointer;
      margin: 5px 15px 5px 0;
      display: inline-block;
      color: rgb(117, 117, 117);
      border-radius: 3px;
      padding: 3px 10px 3px 10px;
      font-size: 14px;
      border: 1px solid #ccc;
      width: 120px;
      font-family: 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', Tahoma,
        'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
      box-sizing: border-box;
      outline: none;
      background-color: rgba(247, 245, 244, 0.3);
    }
    #size {
      @extend label;
      cursor: auto;
      width: 230px;
    }
    #type {
      @extend #size;
    }
  }

  .uploadInput {
    opacity: 0;
  }
}
</style>