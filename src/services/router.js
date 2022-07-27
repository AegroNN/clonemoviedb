export const routes = [
    {path:'', name:"main",component: ()=>import('@/components/movieMain.vue'), },
    {path:'/movies/:listType', name:'movieList',component: ()=>import('@/components/movieList.vue')},
    {path:'/tv/:listType', name:'tvList',component: ()=>import('@/components/tvList.vue')},
]

