import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Sign from "../views/Sign.vue";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/sign",
        name: "Sign",
        component: Sign
    }
];

const router = new VueRouter({
    routes
});

export default router;
