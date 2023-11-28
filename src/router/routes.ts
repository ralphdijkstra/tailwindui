import { RouteRecordRaw } from 'vue-router';

export enum Layout {
    None = 0,
    Default = 1
}

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/dashboard',
        component: () => import("@/views/Home.vue"),
        name: 'home',
        meta: {
            layout: Layout.Default,
        }
    },
    {
        path: '/login',
        component: () => import("@/views/Login.vue"),
        name: 'login',
    },
    {
        path: '/tasks',
        component: () => import("@/views/Tasks.vue"),
        name: 'my tasks',
        meta: {
            layout: Layout.Default,
        }
    },
    {
        path: '/reports/manager',
        component: () => import("@/views/reports/ManagerReports.vue"),
        name: 'manager reports',
        meta: {
            layout: Layout.Default,
        }
    },
];
declare module 'vue-router' {
    interface RouteMeta {
        layout?: Layout
    }
  }