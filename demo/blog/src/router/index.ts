import { createWebHistory, createRouter } from 'vue-router'

import IndexView from '../views/IndexView.vue'
import OverView from '../views/OverView.vue'

const routes = [
    {
        path: '/',
        redirect: '/overview',
        component: IndexView,
        children: [
            {

                path: 'overview',
                component: () => import('../views/OverView.vue'),
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router