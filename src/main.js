import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control

// 路由守卫
// router.beforeEach((to, from, next) => {
//   if (!!store.state.user.token.token) {
//     if (to.path === "/login") {
//       //  表示去的是登录页
//       next("/home"); // 跳到主页
//     } else {
//       next(); // 直接放行
//     }
//   } else {
//     // next("/login");
//     next()
//   }
// });

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
