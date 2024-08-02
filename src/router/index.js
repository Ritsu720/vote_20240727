import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/AddVote',
        name: 'AddVote',
        component: () => import('../views/AddVote.vue'),
    },
    {
        path: '/Group',
        name: 'Group',
        component: () => import('../views/GroupCreate.vue'),
    },
    ]
})

export default router