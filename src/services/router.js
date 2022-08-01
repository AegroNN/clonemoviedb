export const routes = [
    {path:'', name:"main",component: ()=>import('@/components/movieMain.vue'), },
    {path:'/Details/:movieId', name:'details', component: ()=>import('@/components/itemPage.vue')},
    {path:'/:type/:listType', name:'List',component: ()=>import('@/components/list.vue')},
]

