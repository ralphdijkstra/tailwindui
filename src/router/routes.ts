import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import { Route, RouteTypeEnum } from '@/interface/route'

export const routes: Route[] = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        type: RouteTypeEnum.Link
    },
    {
        path: '/about',
        component: About,
        name: 'About',
        type: RouteTypeEnum.Link
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
        type: RouteTypeEnum.Route
    }
];