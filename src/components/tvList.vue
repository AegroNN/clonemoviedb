<template>
    <div class="d-flex flex-column justify-center align-center">
        <navbar></navbar>
        <h1>{{listType}} Series</h1>
        <v-container class="justify-space-between">
        <v-row> 
            <v-col
            cols="3"
            >
            <filtrePart></filtrePart>
            </v-col>
            <v-col
            cols="9"
            >
    <v-container>
    <v-row justify="space-around" >
        <v-col v-for="tv in tvList" :key="tv.id" class="md-3 sm-4 d-flex justify-center">
            <v-card elevation="2" outlined max-width="200" max-height="500">
                <v-img :src="'https://image.tmdb.org/t/p/w440_and_h660_face'+ tv.poster_path"
                max-height="300"
                ></v-img>
                <v-card-title >{{tv.name}}{{tv.title}}</v-card-title>
                <v-card-text>
                    <div class="d-flex flex-column">
                        <v-rating
                        :value="tv.vote_average"
                        length="10"
                        readonly
                        hover
                        dense
                        half-increments
                        size="14"
                        ></v-rating>
                        <div class="grey--text ms-4">
                        {{tv.vote_average}}({{tv.vote_count}})
                        </div>
                    </div>
                    <v-divider class="mx-4"></v-divider>
                    <div>{{tv.release_date}}</div>
                </v-card-text>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
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
import filtrePart from "./filtrePart.vue"

export default {
    name:"tvList",
    components:{
    navbar,
    filtrePart,
},
    data(){
        return{
        tvList:[],
        pageNumber:1,
        show:false,
        type:this.$route.params.type,
        listType:this.$route.params.listType
        }
    },
    created(){
        listGetter.getList(this.type,this.listType,this.pageNumber)
        .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.tvList.push({...result[key],id:key})
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
                this.tvList.push({...result[key],id:key})
            }
        }).catch(e=>console.log(e))
        return this.pageNumber
        },
        refreshPage(){
            this.tvList=[]
            listGetter.getList(this.type,this.listType,this.pageNumber)
            .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.tvList.push({...result[key],id:key})
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
::v-deep .container{
    max-width: 100% !important;
}
</style>