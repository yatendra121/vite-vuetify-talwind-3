import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { AuthRoutes } from './auth'
import { DashboardRoutes } from '@/views/admin/Dashboard/routes'
import { DrawerRoutes } from '@/views/admin/Drawer/routes'
import { Portal } from '@/utils/portal'
import { Meta } from '@/types/router'
const currentPortal = new Portal()

// Async Components
const AdminLayout = () =>
    import(
        /* webpackChunkName: "admin-layout" */ '@/views/AdminLayout/index.vue'
    )
const AuthLayout = () =>
    import(/* webpackChunkName: "auth-layout" */ '@/views/AuthLayout/index.vue')

// Main routes
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/auth'
    },
    {
        path: '/auth',
        children: AuthRoutes,
        component: AuthLayout
    },
    {
        path: '/',
        component: AdminLayout,
        children: [...DrawerRoutes, ...DashboardRoutes]
    },
    {
        // To Handle undefined routes
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        meta: {
            type: 'not_found'
        } as Meta,
        component: () => import('../views/PageNotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(currentPortal.getDomianPrefix()),
    routes
})

//Show NProgress for async components loading
const { isLoading } = useNProgress()

router.beforeResolve((to, from, next) => {
    next()

    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
    }, 300)
})

export default router
