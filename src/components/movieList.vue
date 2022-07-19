<template>
    <div class="list">
        <div class="items" v-for="movie in movieList" v-bind:key="movie.id">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{{movie.title}}</h4>
                    <p class="card-text">{{movie.overview}}</p>
                    <p class="card-text">{{movie.vote_average}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../services/api.js"

export default {
    name:"movieList",
    data(){
        return{
        movieList:[]
        }
    },
    created(){
        api.get("/movie/popular?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&page="+"1")
        .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.movieList.push({...result[key],id:key})
            }
        })
        .catch(e=>console.log(e))
    }
}
</script>

<style  scoped>
.list{
    
}
</style>