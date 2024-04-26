//Import tools
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user-store';

//Import components
import HomeView from '../views/HomeView.vue';

//Create routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/cursos',
        name: 'Courses',
        component: () => import('../views/CoursesView.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/BlogView.vue')
    },
    /* -----  Auth Routes ----- */
    {
        path: '/acceder',
        name: 'Access',
        component: () => import('../views/AccessView.vue')
    },
    /* -----  Private Routes ----- */
    {
        path: '/escritorio',
        name: 'Desk',
        component: () => import('../views/DeskView.vue')
    }
];

//Create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

//Add navigation guard
router.beforeEach(async (to, from, next) => {
    const requiredAuth = to.meta.auth;
    const userStore = useUserStore();

    if (userStore.token) {
        return next();
    }

    if (requiredAuth || localStorage.getItem('user')) {
        try {
            await userStore.refreshToken();

            if (userStore.token) {
                return next();
            }
            return next('acceder');
        } catch (error) {
            return next({ name: 'Inicio' });
        }
    }

    console.log(from);
    return next();
});

export default router;
