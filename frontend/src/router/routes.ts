import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/IndexPage.vue') },
            { path: '/login', component: () => import('pages/LoginPage.vue') },
            {
                path: '/cursos',
                component: () => import('pages/CoursesPage.vue'),
            },
            {
                path: '/cursos/:id',
                component: () => import('pages/OneCoursePage.vue'),
            },
            { path: '/blog', component: () => import('pages/BlogPage.vue') },
            {
                path: '/posts/:id',
                component: () => import('pages/OnePostPage.vue'),
            },
            {
                path: '/sobre-mi',
                component: () => import('pages/AboutMePage.vue'),
            },
            {
                path: '/escritorio',
                component: () => import('pages/DashboardPage.vue'),
                meta: { auth: true },
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
