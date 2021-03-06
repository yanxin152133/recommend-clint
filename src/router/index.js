import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Sign from "../views/Sign.vue";
import Forget from "../views/Forget.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/", //首页
        name: "Login",
        component: Login
    },
    {
        path: "/login", //登录
        name: "Login",
        component: Login
    },
    {
        path: "/sign", //注册
        name: "Sign",
        component: Sign
    },
    {
        path: "/forget", //忘记密码
        name: "Forget",
        component: Forget
    },
    {
        path: "/detail", //详情页
        name: "Detail",
        component: Detail
    }
];

const router = new VueRouter({
    routes
});

export default router;
