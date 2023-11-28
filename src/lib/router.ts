import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from '@/router/routes.ts'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    return next();
});

export default router;