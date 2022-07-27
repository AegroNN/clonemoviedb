<template>
    <div class="d-flex flex-column justify-center align-center">
        <navbar></navbar>
    <v-container>
    <v-row justify="space-around" >
        <v-col v-for="movie in movieList" :key="movie.id" class="sm-4 d-flex justify-center">
            <v-card elevation="2" outlined max-width="315" max-height="700">
                <v-img :src="'https://image.tmdb.org/t/p/w440_and_h660_face'+ movie.poster_path"
                max-height="500"
                ></v-img>
                <v-card-title>{{movie.title}}</v-card-title>
                <v-card-text>
                    <div class="d-flex flex-row justify-space-between">
                        <v-rating
                        :value="movie.vote_average"
                        length="10"
                        readonly
                        hover
                        dense
                        half-increments
                        size="14"
                        ></v-rating>
                        <div class="grey--text ms-4">
                        {{movie.vote_average}}({{movie.vote_count}})
                        </div>
                    </div>
                    <v-divider class="mx-4"></v-divider>
                    <div>{{movie.release_date}}</div>
                </v-card-text>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
        <v-btn class="btn"
        @click="changePage"
        width="500"
        color="primary"
        >Daha fazla yükle</v-btn>
    </div>
</template>

<script>
/* eslint-disable */
import listGetter from "@/services/lists.js"
import navbar from "./movieNavbar.vue"

export default {
    name:"movieList",
    components:{
        navbar
    },
    data(){
        return{
        movieList:[],
        pageNumber:1,
        show:false,
        type:this.$route.params.type,
        listType:this.$route.params.listType
        }
    },
    created(){
        console.log(this.type)
        console.log(this.listType)
        listGetter.getList(this.type,this.listType,this.pageNumber)
        .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.movieList.push({...result[key],id:key})
            }
        }).catch(e=>console.log(e))
    },
    watch:{
        "$route"(to){
            this.type= to.params.type
            this.listType= to.params.listType
            this.refreshPage()
        }
    },
    methods:{
        changePage(){
            this.pageNumber++
            listGetter.getList(this.type,this.listType,this.pageNumber)
            .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.movieList.push({...result[key],id:key})
            }
        }).catch(e=>console.log(e))
        return this.pageNumber
        },
        refreshPage(){
            this.movieList=[]
            listGetter.getList(this.type,this.listType,this.pageNumber)
            .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.movieList.push({...result[key],id:key})
            }
            }).catch(e=>console.log(e))
        }     
        }
}
</script>

<style  scoped>
::v-deep .v-card_title{
    word-break:break-word !important;
}
</style>