import { imgCode, login, getUserInfo } from "@/api/user";
import router from "@/router";
import { Message } from "element-ui";
import { setTokenTime } from "@/utils/auth";
export default {
  namespaced: true,
  state: {
    imgSrc: "",
    cliToken: "",
    token: {},
    userInfo: {},
  },
  mutations: {
    // 获取验证码图片
    GETIMGCODE(state, payload) {
      state.imgSrc = `http://localhost:9528/api/user-service/user/imageCode/${payload}`;
      state.cliToken = payload;
    },
    // 设置token
    SETTOKEN(state, payload) {
      state.token = payload;
    },
    LOGOUT(state, payload) {
      state.token = {};
    },
    // 设置用户信息
    SETUSERINFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    // 发起获取图片验证码请求
    async getImgCode({ commit }, n) {
      const token = Math.ceil(Math.random() * 100);
      try {
        const res = await imgCode(token);
        commit("GETIMGCODE", token);
      } catch (error) {}
    },

    //发起登录请求
    async userLogin(context, obj) {
      // obj = obj.clientToken = context.state.cliToken
      try {
        const res = await login(
          obj.loginName,
          obj.password,
          obj.code,
          context.state.cliToken
        );
        // 判断登录验证是否通过
        if (!res.data.success) {
          Message(res.data.msg);
        } else {
          Message({
            showClose: true,
            message: "恭喜你，登录成功",
            type: "success",
          });
          context.commit("SETTOKEN", res.data);
          setTokenTime();
          router.push("/home");
        }
      } catch (error) {}
    },
    // 退出登录
    logout(context) {
      context.commit("LOGOUT");
    },
    // 登录后获取用户信息
    async getUserInfo(context) {
      const { data } = await getUserInfo(context.state.token.userId);
      context.commit("SETUSERINFO", data);
    },
  },
};
