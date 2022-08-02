import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
// import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor 请求拦截器
service.interceptors.request.use((config) => {
  // 判断是否有存token 有则请求头添加注入token
  if (store.state.user.token.token) {
    config.headers.Authorization =store.state.user.token.token;
  }
  return config;
});

// response interceptor 响应拦截器
service.interceptors.response.use();

export default service;
