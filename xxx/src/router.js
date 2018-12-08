const routesConfig = [
    {
        path: '/',
        component: () => import('./components/HelloPudding.vue')
    },
    {
        path: '/pic',
        component: () => import('./components/picPage.vue')
    }
]

export default routesConfig