<!-- 登录 -->
<template>
  <div class="login layout">
    <div class="main card">
      <div class="cell">
        <span class="fade">
          <router-link to="/">touch</router-link>
          <span class="chevron">&nbsp;›&nbsp;</span>
          login
        </span>
      </div>
      <div class="form content">
        <form action="http://localhost:8080/reCAPTCHA" method="post" @submit.prevent="recaptcha">
          <table>
            <tbody>
              <tr>
                <td width="120" align="right">用户名&nbsp;</td>
                <td width="auto" align="left">
                  <input type="text" required placeholder="用户名或电子邮箱地址">
                </td>
              </tr>
              <tr>
                <td width="120" align="right">密码&nbsp;</td>
                <td width="auto" align="left">
                  <input type="password" required placeholder="密码">
                </td>
              </tr>
              <tr v-if="showVerification">
                <td width="120" align="right">人机验证&nbsp;</td>
                <td width="auto" align="left">
                  <div
                    class="verification"
                    :style="{background: 'url(' + this.verificationImageUrl + ')'}"
                  ></div>
                  <div class="sep10"></div>
                  <input type="text" required placeholder="请输入上图验证码">
                </td>
              </tr>
              <tr>
                <td width="120" align="right"></td>
                <td width="auto" align="left">
                  <input class="submit" type="submit" value="登录">
                </td>
              </tr>
              <tr>
                <td width="120" align="right"></td>
                <td width="auto" align="left">
                  <router-link to="/">找回密码</router-link>
                </td>
              </tr>
              <tr>
                <td width="120" align="right"></td>
                <td width="auto" align="left">
                  <small>
                    This site is protected by reCAPTCHA and the Google
                    <a
                      href="https://policies.google.com/privacy"
                    >Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueReCaptcha } from 'vue-recaptcha-v3';
Vue.use(VueReCaptcha, {
  siteKey: '6LfNoKQUAAAAADaVj6O64cZVTlblgMOETMkQDjVn',
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true,
  },
});

@Component
export default class Login extends Vue {
  // initial data
  private showVerification: boolean = false;
  private verificationImageUrl: string =
    'https://www.v2ex.com/_captcha?once=37374';

  // method
  private recaptcha() {
    this.$recaptcha('login').then((token) => {
      const data = new URLSearchParams();
      data.append('recaptchaResp', token);
      this.axios.post('reCAPTCHA', data).then((res) => {
        this.showVerification = res.data;
      });
    });
  }
}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
</style>