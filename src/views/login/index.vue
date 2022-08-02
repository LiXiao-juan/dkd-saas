<template>
  <div class="body">
    <!-- 白色大盒子 -->
    <div class="login-box">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <div class="title-container">
          <img
            src="../../assets/logo.595745bd.png"
            alt=""
            class="user-buddha"
          />
        </div>
        <!-- 用户名 -->
        <el-form-item prop="loginName">
          <!-- <span class="svg-container">
            <svg-icon icon-class="user" />
          </span> -->
          <el-input
            ref="username"
            v-model="loginForm.loginName"
            placeholder="请输入账号"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            prefix-icon="el-icon-mobile-phone"
          />
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            prefix-icon="el-icon-lock"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            prefix-icon="
            el-icon-circle-check"
            maxlength="4"
            placeholder="请输入验证码"
            @keyup.enter="toLogin"
          />
        </el-form-item>
        <img
          :src="imgSrc"
          alt=""
          class="verify-code"
          @click.stop="$store.dispatch('user/getImgCode')"
        />

        <el-button
          :loading="loading"
          type="primary"
          style="
            width: 100%;
            margin-bottom: 30px;
            background-color: #677aed;
            height: 50px;
          "
          @click="toLogin"
          >登录</el-button
        >

        <!-- <div class="tips">
          <span style="margin-right:20px;">username: admin</span>
          <span> password: any</span>
        </div> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { validUsername, validUserCode } from "@/utils/validate";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      console.log(value);
      if (value.length < 4) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      value += "";
      if (value.length < 4) {
        callback(new Error("请输入4位验证码"));
      } else {
        callback();
      }
    };
    return {
      // 登录对象
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: "",
        loginType: 0,
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        code: [{ required: true, trigger: "blur", validator: validateCode }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  async created() {
    // 调用
    this.getImgCode();
  },
  methods: {
    // 获取图片验证码
    ...mapActions("user", ["getImgCode", "userLogin"]),
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    async toLogin() {
      this.loading = true;
      try {
        await this.$refs.loginForm.validate();
        await this.userLogin(this.loginForm);
      } finally {
        this.loading = false;
      }
      // this.$router.push("/home");
    },
  },
  computed: {
    ...mapState("user", ["imgSrc"]),
  },
};
</script>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  background: url("../../assets/background.be4fae7d.png") no-repeat center;

  .login-box {
    position: absolute;
    width: 518px;
    height: 388px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .user-buddha {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
    .show-pwd {
      position: absolute;
      right: 15px;
      top: 5px;
    }
    .verify-code {
      position: absolute;
      right: 36px;
      top: 225px;
    }
  }
}
::v-deep .el-input__inner {
  height: 52px;
}
</style>
