import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        // Dashboards
        {
            path: '/',
            name: 'Home-p',
            component: () => import('../Front/Page/Home.vue'),
        },
        {
            path: '/problems',
            name: 'Problems',
            component: () => import('../Front/Page/Problems.vue'),
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('../Front/Page/Profile.vue'),
        },
        {
            path: '/control-page',
            name: 'control-page',
            component: () => import('../Front/Page/ControlPage.vue'),
        },
        {
            path: '/trainings',
            name: 'Trainings',
            component: () => import('../Front/Page/Trainings.vue'),
        },
        {
            path: '/traings-block',
            name: 'TraingsBlock',
            component: () => import('../Front/Page/TraingsBlock.vue'),
        },
        {
            path: '/problems-page',
            name: 'ProblemsPage',
            component: () => import('../Front/Page/ProblemsPage.vue'),
        },
        {
            path: '/login',
            name: 'login',
            meta: { layout: 'userpages' },
            component: () => import('../Front/UserPages/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            meta: { layout: 'userpages' },
            component: () => import('../Front/UserPages/Register.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            meta: { layout: 'userpages' },
            component: () => import('../Front/UserPages/ForgotPassword.vue'),
        },






      

    ]
})
