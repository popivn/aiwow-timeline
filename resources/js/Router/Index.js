import { createRouter, createWebHistory } from "vue-router";

import { Home,TimeLine, NotFound } from "../Pages/Index";

import { MenuLayout } from "../Components/Layout/Index";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: MenuLayout },
    },
    {
        path: '/timeline',
        name: 'TimeLine',
        component: TimeLine,
        meta: { layout: MenuLayout },
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: { layout: MenuLayout },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
