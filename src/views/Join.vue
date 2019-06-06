<!-- 注册 -->
<template>
  <div class="join layout">
    <div class="main card">
      <div class="cell">
        <span class="fade">
          <router-link to="/">touch</router-link>
          <span class="chevron">&nbsp;›&nbsp;</span>
          join
        </span>
      </div>
      <div class="form content">
        <form action="http://localhost:8080/reCAPTCHA" method="post" @submit.prevent="recaptcha">
          <table>
            <tbody>
              <tr>
                <td width="120" align="right">用户名&nbsp;</td>
                <td width="auto" align="left">
                  <input type="text" required placeholder="用户名">
                </td>
              </tr>
              <tr>
                <td width="120" align="right">密码&nbsp;</td>
                <td width="auto" align="left">
                  <input type="password" required placeholder="密码">
                </td>
              </tr>
              <tr>
                <td width="120" align="right">电子邮箱&nbsp;</td>
                <td width="auto" align="left">
                  <input type="email" required placeholder="邮箱">
                </td>
              </tr>
              <tr>
                <td width="120" align="right">注册答题&nbsp;</td>
                <td width="auto" align="left"></td>
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
                  <input class="submit" type="submit" value="注册">
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
export default class Join extends Vue {}
</script>

<style scoped lang='scss'>
@import '@/scss/index.scss';
.form {
  tr {
    input {
      width: 250px;
    }
  }
}
</style>