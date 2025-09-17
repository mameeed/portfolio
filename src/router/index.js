import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        meta: {title: "Mameed | Portfolio page"},
        component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
    },
];

const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    },
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
