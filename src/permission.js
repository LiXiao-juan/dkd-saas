import router from "./router";
import store from "./store";
// 白名单----用户未登录也可以访问
const whiteList = ["/login", "/404"];
// 全局路由守卫
router.beforeEach((to, from, next) => {
  const token = store.state.user.token.token;
  //   判断是否登录
  if (token) {
    // 再判断是否请求过---若第一次进入才发送请求
    // if (!store.state.user.token.token) {
    // 每次跳转发送获取用户信息的请求
    // store.dispatch("user/getUserInfo");
    // }
    // 登录了若想去登录页面---强制去首页
    if (to.path === "/login") return next("/home");
    // 不去登录页---放行
    next();
  } else {
    // 判断是否去白名单中----在就放行--不在就去登录页
    const isCludes = whiteList.includes(to.path);
    if (isCludes) return next();
    next("/login");
  }
});
