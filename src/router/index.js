import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index"),
        meta: { title: "立可得", icon: "el-icon-s-home" },
      },
    ],
  },

  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "工单管理", icon: "el-icon-tickets" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "运营工单", icon: "table" },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "运维工单", icon: "tree" },
      },
    ],
  },

  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "点位管理",
      icon: "el-icon-map-location",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "nested1",
        meta: { title: "区域管理" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "nested2",
        meta: { title: "点位管理" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "nested3",
        meta: { title: "合作商管理" },
      },
    ],
  },
  {
    path: "/Device",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Device",
    meta: {
      title: "设备管理",
      icon: "el-icon-refrigerato",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Device1",
        meta: { title: "设备管理" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Device2",
        meta: { title: "设备状态" },
      },
      {
        path: "menu3",
        component: () => import("@/views/nested/menu2/index"),
        name: "Device3",
        meta: { title: "设置类型管理" },
      },
    ],
  },
  {
    path: "/people",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Device",
    meta: {
      title: "人员管理",
      icon: "el-icon-user",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Device1",
        meta: { title: "人员列表" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Device2",
        meta: { title: "人效统计" },
      },
      {
        path: "menu3",
        component: () => import("@/views/nested/menu2/index"),
        name: "Device3",
        meta: { title: "工作量列表" },
      },
    ],
  },
  {
    path: "/goods",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Device",
    meta: {
      title: "商品管理",
      icon: "el-icon-goods",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Device1",
        meta: { title: "商品类型" },
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Device2",
        meta: { title: "商品管理" },
      },
    ],
  },
  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "策略管理", icon: "el-icon-table-lamp" },
      },
    ],
  },
  {
    path: "/menu",
    component: Layout,
    children: [
      {
        path: "menu1",
        name: "Device2",
        component: () => import("@/views/nested/menu2/index"),
        meta: { title: "订单管理", icon: "el-icon-collection" },
      },
    ],
  },
  {
    path: "/menu2",
    component: Layout,
    children: [
      {
        path: "menu2",
        name: "Device2",
        component: () => import("@/views/nested/menu2/index"),
        meta: { title: "对账管理", icon: "el-icon-data-analysis" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
