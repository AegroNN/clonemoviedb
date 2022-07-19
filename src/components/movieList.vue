<template>
    <div class="d-flex flex-column justify-center align-center">
        <div class="items" v-for="movie in movieList" v-bind:key="movie.id">
            <v-card class="mx-auto my-12" max-width="500">
                <v-img :src="'https://image.tmdb.org/t/p/w440_and_h660_face'+movie.poster_path"
                
                ></v-img>
                <v-card-title>{{movie.title}}</v-card-title>
                <v-card-text>
                    <div class="vote">
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
                    <div>{{movie.overview}}</div>
                </v-card-text>
            </v-card>
        </div>
        <v-btn class="btn"
        @click="changePage"
        width="500"
        >Daha fazla yükle</v-btn>
    </div>
</template>

<script>
import api from "../services/api.js"

export default {
    name:"movieList",
    data(){
        return{
        movieList:[],
        pageNumber:1,
        }
    },
    created(){
        api.get("/movie/popular?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&page="+this.pageNumber)
        .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.movieList.push({...result[key],id:key})
            }
        })
        .catch(e=>console.log(e))
    },
    methods:{
        changePage:function(){
            this.pageNumber++
            api.get("/movie/popular?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&page="+this.pageNumber)
                .then(response=>{
                console.log(response)
                let result = response.data.results
                for(let key in result){
                this.movieList.push({...result[key],id:key})
                }})
                .catch(e=>console.log(e))
            return this.pageNumber
        },
    }
}
</script>

<style  scoped> 
.items{
    padding: 5px;
}
.vote{
    display: flex;
    flex-direction: row;
}

</style>