import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: "/", name: "Home", component: () => import("../views/Home.vue") },
        {
            path: "/login",
            name: "Login",
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/register",
            name: "Register",
            component: () => import("../views/Register.vue"),
        },
        {
            path: "/feed",
            name: "Feed",
            component: () => import("../views/Feed.vue"),
            meta: {
                requiresAuth: true,
            }
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
            next();
        } else {
            alert("No tienes acceso");
            next("/");
        }
    } else {
        next();
    }
});
export default router;
