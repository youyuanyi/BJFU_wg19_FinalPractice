import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
    { path: "/login", component: () => import("../views/Login.vue") },
    { path: "/register", component: () => import("../views/Register.vue") },
    { path: "/", component: () => import("../views/Login.vue") },
    { path: "/index", component: () => import("../views/MainFrame.vue") },
    { path: "/UserManage", component: () => import("../views/UserManage.vue") },
    { path: "/NodeManage", component: () => import("../views/NodeManage.vue") },
    { path: "/PhysicalManage", component: () => import("../views/PhysicalManage.vue") },
    { path: "/DataManage", component: () => import("../views/DataManage.vue") },
    { path: "/test",component: () => import("../views/test.vue")}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router, routes }   // routes暂时用不上