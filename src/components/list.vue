<template>
    <div class="d-flex flex-column justify-center align-center">
        <navbar></navbar>
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
        <v-col v-for="tv in tvList.filter((tv)=>tv.media_type!=mediaType)" :key="tv.id" class="md-3 sm-4 d-flex justify-center">
            <item-card :itemData="tv"></item-card>
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
import itemCard from "./itemCard.vue"

export default {
    name:"tvList",
    components:{
    navbar,
    filtrePart,
    itemCard
},
    data(){
        return{
        tvList:[],
        pageNumber:1,
        show:false,
        type:this.$route.params.type,
        listType:this.$route.params.listType,
        mediaType:"person",
        keyWord:this.$route.query.keyWord,
        genres:this.$route.query.genres,
        pointArray:[this.$route.query.fromScore,this.$route.query.toScore],
        sort:this.$route.query.sort
        }
    },
    created(){
        this.placeList()
    },
    watch:{
        "$route"(to){
            if(to.query.sort==undefined)
            {
            this.type= to.params.type
            this.listType= to.params.listType
            this.refreshPage()
            }
            else
            {
            this.keyWord=to.query.keyWord
            this.genres=to.query.genres
            this.pointArray=[to.query.fromScore,to.query.toScore]
            this.sort=to.query.sort
            this.showFilteredList()
            }
        },
    },
    methods:{
        placeList(){
            if(this.type=="Search")
            {
            listGetter.getSearchResult(this.listType,this.pageNumber)
            .then(response=>{
                let result = response.data.results
                for(let key in result){
                this.tvList.push({...result[key]})
                }
            }).catch(e=>console.log(e))}
            else{
            listGetter.getList(this.type,this.listType,this.pageNumber)
            .then(response=>{
            let result = response.data.results
            for(let key in result){
                this.tvList.push({...result[key]})
            }
            }).catch(e=>console.log(e))}
        },
        changePage(){
            this.pageNumber++
            this.placeList()
            return this.pageNumber
        },
        refreshPage(){
            this.tvList=[]
            this.placeList()
        },
        showFilteredList(){
            debugger
            this.tvList=[]
            debugger
            listGetter.getFilteredList(this.type,this.sort,this.genres,this.keyWord,this.pageNumber,this.pointArray[0],this.pointArray[1])
            .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.tvList.push({...result[key]})
            }
            debugger
            }).catch(e=>console.log(e))},     
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