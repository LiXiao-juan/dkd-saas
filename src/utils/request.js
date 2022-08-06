import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getTokenTime } from "./auth";
// import { getToken } from "@/utils/auth";

const isTimeout = () => {
  // 每次请求的时间戳
  const currentTime = Date.now();
  // 获取token时的时间戳
  const tokenTime = getTokenTime();
  const time = 2 * 60 * 60 * 1000;
  return currentTime - tokenTime > time;
};
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000, // request timeout
});

// request interceptor 请求拦截器
service.interceptors.request.use(async (config) => {
  // console.log(222);
  if (!store.state.user.token.token) return config;

  if (isTimeout()) {
    await store.dispatch("user/logout");
    router.push("/login");
    return Promise.reject(new Error("登录过期"));
  } else {
    config.headers.Authorization = store.state.user.token.token;
  }

  return config;
});

// response interceptor 响应拦截器
service.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    // 响应错误的判断----若后端返回的token错误---删除token  重新登录
    if (err?.response?.status === 401) {
      Message.error("登录过期");
      await store.dispatch("user/logout");
      router.push("/login");
    } else {
      Message.error(err.message);
    }
    return Promise.reject(err);
  }
);

export default service;
