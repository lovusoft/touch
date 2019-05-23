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
        <form action="/login" method="post">
          <table>
            <tbody>
              <tr>
                <td width="120" align="right">用户名</td>
                <td width="auto" align="left">
                  <input type="text" required placeholder="用户名或电子邮箱地址">
                </td>
              </tr>
              <tr>
                <td width="120" align="right">密码</td>
                <td width="auto" align="left">
                  <input type="password" required placeholder="密码">
                </td>
              </tr>
              <tr>
                <td width="120" align="right">人机验证</td>
                <td width="auto" align="left">
                  <input type="check" required @click="tencentCaptcha" value="人机验证">
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
@Component
export default class Login extends Vue {
  // lifecycle hook
  private mounted() {
    const script = document.createElement('script');
    const head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = 'https://ssl.captcha.qq.com/TCaptcha.js';
    head.appendChild(script);
  }
  // method
  // 腾讯验证
  private tencentCaptcha() {
    const cap = new TencentCaptcha('2018456572', (resp: any) => {
      window.console.log(resp);
    });
    cap.show();
  }
  // 谷歌验证
  // private recaptcha() {
  //   this.$recaptcha('login').then((token) => {
  //     const params = new URLSearchParams();
  //     params.append('token', token);
  //     const config = {
  //       url: '/reCAPTCHA?token=' + token,
  //       method: 'post',
  //     };
  //     this.axios.request(config).then((res: any) => {
  //       window.console.log(res);
  //     });
  //   });
  // }
}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
.form {
  display: flex;
  justify-content: flex-start;
  tr {
    margin: 5px;
    display: block;
    a {
      color: #778087;
      text-decoration: none;
      &:hover {
        color: #4d5256;
        text-decoration: underline;
      }
    }
    input {
      border-radius: 3px;
      padding: 5px;
      font-size: 14px;
      border: 1px solid #ccc;
      width: 320px;
      font-family: 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', Tahoma,
        'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
      box-sizing: border-box;
      outline: none;
      background-color: rgba(247, 245, 244, 0.3);
    }
    .submit {
      width: 50px;
      background-color: rgba(220, 226, 241, 0.4);
      cursor: pointer;
      color: #222;
      text-shadow: 0 1px 0 #fff;
      font-weight: 600;
      box-shadow: 0 1px 0 rgba(66, 66, 77, 0.1);
    }
    small {
      color: #c1c1c1;
    }
  }
}
.grecaptcha-badge {
  visibility: hidden;
}
</style>