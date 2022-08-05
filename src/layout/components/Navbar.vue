<template>
  <div class="navbar">
    <!-- <hamburger
      :is-active="sidebar"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->

    <div class="box">
      <img src="../../assets/logo.png" alt="" class="logo" />
      <!-- 用户信息区域 -->
      <div class="user-info">
        <!-- 头像区域 -->
        <img
          :src="$store.state.user.userInfo.image + '123'"
          alt=""
          v-imgError="defaultImg"
          class="user-pic"
        />
        <!-- 信息 -->
        <p>欢迎您~~ {{ $store.state.user.userInfo.loginName }}</p>
        <!-- 退出 -->
        <div class="logout" @click="toLogin" slot="reference">
          <p>退出</p>
          <i class="el-icon-caret-bottom"></i>
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <!-- <el-button></el-button> -->
          </el-popover>
        </div>
      </div>
    </div>

    <div class="right-menu"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Breadcrumb from "@/components/Breadcrumb";
// import Hamburger from "@/components/Hamburger";

export default {
  data() {
    return {
      defaultImg:
        "https://img2.baidu.com/it/u=861943924,2838283407&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
    };
  },
  components: {
    // Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    //退出账号
    async toLogin() {
      await this.$store.dispatch("user/logout");
      this.$router.push("/login");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: relative;
  // background: #5373e0;
  background: url("../../assets/bg.png") no-repeat;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
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
.user-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
