<template>
  <div class="box">
    <img src="../../assets/logo.png" alt="" class="logo" />
    <!-- 用户信息区域 -->
    <div class="user-info">
      <!-- 头像区域 -->
      <img src="../../assets/user.png" alt="" />
      <!-- 信息 -->
      <p>欢迎您~~ {{ $store.state.user.userInfo.loginName }}</p>
      <!-- 退出 -->
      <div class="logout" @click="toLogin">
        <p>退出</p>
        <i class="el-icon-caret-bottom"></i>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    // this.getUserInfo();
  },
  methods: {
    // ...mapActions("user", ["getUserInfo"]),
    //退出账号
    async toLogin() {
      await this.$store.dispatch("user/logout");
      this.$router.push("/login");
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.box {
  height: 100%;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 14px;
}
.logo {
  width: 80px;
}
.user-info {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .logout {
    display: flex;
    cursor: pointer;
  }
}
</style>
