<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            @click="loginWay = true"
            :class="{ on: loginWay }"
            >短信登录</a
          >
          <a
            href="javascript:;"
            @click="loginWay = false"
            :class="{ on: !loginWay }"
            >密码登录</a
          >
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{ on: loginWay }">
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
              />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{ right_phone: rightPhone }"
                @click.prevent="getCode"
              >
                {{ time ? "已发送" + time : "获取验证码" }}
              </button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: !loginWay }">
            <section>
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                  v-model="name"
                />
              </section>
              <section class="login_verification">
                <input
                  type="text"
                  maxlength="8"
                  placeholder="密码"
                  v-model="password"
                  v-if="showpas"
                />
                <input
                  type="password"
                  maxlength="8"
                  placeholder="密码"
                  v-model="password"
                  v-else
                />
                <div
                  class="switch_button"
                  :class="showpas ? 'on' : 'off'"
                  @click="showpas = !showpas"
                >
                  <div class="switch_circle" :class="{ right: showpas }"></div>
                  <span class="switch_text">{{ showpas ? "abc" : "..." }}</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="验证码"
                  v-model="captcha"
                />
                <img
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click="getCaptcha"
                  ref="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit" @click="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a @click="$router.back()" class="go_back">
        <i class="iconfont icon-zuojiantou"></i>
      </a>
    </div>
    <AlertTip
      :alertText="alertText"
      v-show="showAlert"
      @show="showAlertTip"
    ></AlertTip>
  </section>
</template>

<script>
import AlertTip from "../../components/AlertTip/AlertTip.vue";
import { reqSmsLogin, reqSendCode, reqPwdLogin } from "../../api/index";
export default {
  name: "Login",
  components: {
    AlertTip,
  },
  data() {
    return {
      loginWay: true, //true为短信登陆,false为密码登录
      phone: "", //手机号
      code: "", //手机验证码
      name: "", //用户名
      captcha: "", //图形验证码
      password: "", //密码
      time: 0, //手机验证码倒计时
      showpas: false, //显示与隐藏密码
      alertText: "", //提示信息
      showAlert: false, //显示与隐藏弹框
    };
  },
  methods: {
    // 手机验证码倒计时,获取验证码
    async getCode() {
      let timer;
      if (this.time === 0) {
        clearInterval(timer);
        this.time = 30;
        timer = setInterval(() => {
          this.time--;
          if (this.time <= 0) clearInterval(timer);
        }, 1000);
        const result = await reqSendCode(this.phone);
        if (result.code === 1) {
          this.showText(result.msg);
          clearInterval(timer);
          this.time = 0;
        } else {
        }
      }
    },
    // 封装重复代码
    showText(text) {
      this.showAlert = true;
      this.alertText = text;
    },
    // 验证登录信息
    async login() {
      this.result = 0
      if (this.loginWay) {
        if (!this.rightPhone) {
          this.showText("手机号不正确");
        } else if (!/^\d{6}$/.test(this.code)) {
          this.showText("验证码必须为6位");
        }else{
          this.result = await reqSmsLogin(this.phone, this.code);
        }
      } else {
        if (!this.name) {
          this.showText("用户名不能为空");
        } else if (!this.password) {
          this.showText("密码不能为空");
        } else if (!this.captcha) {
          this.showText("验证码不能为空");
          console.log(result);
        }else{
          const {name,password,captcha} = this
          this.result = await reqPwdLogin({name,password,captcha});
        }
      }
      if (this.result.code === 0) {
        this.$router.replace("/msite");
        this.$store.commit('USERINFO',this.result.data)
      } else if(this.result.code===1){
        this.showText(this.result.msg);
      }
    },
    // 关闭信息提示框
    showAlertTip() {
      this.showAlert = false;
    },
    // 获取图形验证码
    getCaptcha() {
      // 使用src完成,每次的地址必须不一样
      this.$refs.captcha.src =
        "http://localhost:4000/captcha?time=" + Date.now();
    },
  },
  computed: {
    rightPhone: {
      get() {
        return /^1\d{10}$/.test(this.phone);
      },
    },
  },
};
</script>

<style>
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
.loginContainer .loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.loginContainer .loginInner .login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title {
  padding-top: 40px;
  text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title > a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}

.loginContainer .loginInner .login_header .login_header_title > a:first-child {
  margin-right: 40px;
}

.loginContainer .loginInner .login_header .login_header_title > a.on {
  color: #02a774;
  font-weight: 700;
  border-bottom: 2px solid #02a774;
}
.loginContainer .loginInner .login_content > form > div {
  display: none;
}
.loginContainer .loginInner .login_content > form > div.on {
  display: block;
}
.loginContainer .loginInner .login_content > form > div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.loginContainer .loginInner .login_content > form > div input:focus {
  border: 1px solid #02a774;
}

.loginContainer .loginInner .login_content > form > div .login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .right_phone {
  color: black;
}

.loginContainer .loginInner .login_content > form > div .login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.off {
  background: #fff;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.off
  .switch_text {
  float: right;
  color: #ddd;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.on {
  background: #02a774;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .right {
  transform: translateX(28px);
}
.loginContainer .loginInner .login_content > form > div .login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

.loginContainer .loginInner .login_content > form > div .login_hint > a {
  color: #02a774;
}
.loginContainer .loginInner .login_content > form .login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}
.loginContainer .loginInner .login_content .about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
.loginContainer .loginInner .go_back {
  position: absolute;
  top: 25px;
  left: 25px;
  width: 30px;
  height: 30px;
}
.loginContainer .loginInner .go_back > .iconfont {
  font-size: 20px;
  color: #999;
}

#app > .on .loginContainer .loginInner .login_header .login_header_title {
  padding-top: 40px;
  text-align: center;
}
#app > .on .loginContainer .loginInner .login_header .login_header_title > a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}

.loginContainer .loginInner .login_header .login_header_title > a:first-child {
  margin-right: 40px;
}

.loginContainer .loginInner .login_header .login_header_title > a.on {
  color: #02a774;
  font-weight: 700;
  border-bottom: 2px solid #02a774;
}
</style>