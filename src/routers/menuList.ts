const menuList = [
    {
        path: '/vueCard',
        component: () => import('@/lib/vueCardTest.vue')
    },
    {
        path: '/vueSearchTest',
        component: () => import('@/lib/vueSearchTest.vue')
    }
]
export default menuList;