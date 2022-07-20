

export const routes = [
    {path:'', name:"main",component: ()=>import('@/components/movieMain.vue') },
    {path:'/popularList', name:'popular',component: ()=>import('@/components/movieList.vue'),},
    {path:'/onGoingList', name:'onGoing',component: ()=>import('@/components/movieList.vue')}
]

