import { imgCode, login } from "@/api/user";
export default {
  namespaced: true,
  state: {
    imgSrc: "",
    cliToken: "",
  },
  mutations: {
    GETIMGCODE(state, payload) {
      state.imgSrc = `http://localhost:9528/api/user-service/user/imageCode/${payload}`;
      state.cliToken = payload;
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

    //登录
    async userLogin(context, obj) {
      // obj = obj.clientToken = context.state.cliToken
      try {
        const res = await login(
          obj.loginName,
          obj.password,
          obj.code,
          context.state.cliToken
        );
      } catch (error) {}
    },
  },
};
