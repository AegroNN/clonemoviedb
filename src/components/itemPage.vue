<template>
<div>
<navbar></navbar>
<div class="topPart">
    <v-row>
        <v-col cols="4" class="d-flex justify-center align-center" >
            <v-img class="itemImg" :src="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ itemDetails.poster_path" max-width="300" max-height="450"></v-img>
        </v-col>
        <v-col cols="8" class="detailsPart">
            <div class="titleDown">
            <h2>{{itemDetails.title}}{{itemDetails.name}}</h2>
            <div class="d-flex justify-space-around">
                <p>{{itemDetails.release_date}}({{itemDetails.original_language}})</p>
                <div class="d-flex">
                <p v-for="genre in itemDetails.genres" :key="genre.id">
                    {{genre.name}},
                </p>
                </div>
                <p>{{itemDetails.runtime}} Minutes</p>
            </div>
            <div class="d-flex justify-space-around">
                <div>
                    <v-rating
                    :value="itemDetails.vote_average/2"
                    color="white"
                    length="5"
                    readonly
                    hover
                    dense
                    half-increments
                    size="14"
                    ></v-rating>
                    <p> {{itemDetails.vote_average/2}}({{itemDetails.vote_count}})</p>
                </div>
                <v-btn
                outlined
                fab
                dark
                color="white"
                >
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>
                <v-btn
                outlined
                fab
                dark
                color="white"
                >
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn
                outlined
                fab
                dark
                color="white"
                >
                    <v-icon>mdi-star</v-icon>
                </v-btn>
                <v-btn
                outlined
                fab
                dark
                color="white"
                >
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </div>
            <p style="opacity:0.7">{{itemDetails.tagline}}</p>
            </div>
            <div class="overview">
                <h4>Özet</h4>
                <p>
                    {{itemDetails.overview}}
                </p>
            </div>
        </v-col>
    </v-row>
</div>
<h4>Actors</h4>
 <div class="actorPart"> 
        <v-col v-for="(actor,index) in actors.filter((actor)=>actor.order<=10)" :key="index" class="sm-4 d-flex justify-center">
            <v-card>
                <v-img :src="'https://www.themoviedb.org/t/p/w276_and_h350_face'+actor.profile_path" max-height="175" max-width="138"></v-img>
                <v-card-title>{{actor.name}}</v-card-title>
            </v-card>
        </v-col>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import itemGetter from "@/services/lists.js"
import navbar from "./movieNavbar.vue"
export default {
    name:"itemPage",
    data(){
        return{
            itemId:this.$route.params.itemId,
            itemType:this.$route.params.type,
            itemDetails:{},
            actors:{},
        }
    },
    components:{
        navbar,
    },
    created(){
        debugger
        if(this.itemType=="movie")
        {
        debugger
        itemGetter.getMovie(this.itemId)
        .then(response=>{
            this.itemDetails = response.data
            console.log(response)
        }).catch(e=>console.log(e))

        itemGetter.getMovieActors(this.itemId)
        .then(response=>{
            this.actors = response.data.cast
            console.log(this.actors)
        }).catch(e=>console.log(e))
        }
        else
        {
            itemGetter.getSeries(this.itemId)
        .then(response=>{
            this.itemDetails = response.data
            console.log(response)
        }).catch(e=>console.log(e))

        itemGetter.getSeriesActors(this.itemId)
        .then(response=>{
            this.actors = response.data.cast
            console.log(this.actors)
        }).catch(e=>console.log(e))
        }
    },
    computed:{
        
        firstTwelveActor(){
          return this.actors.filter((actor)=>actor.order<=10)
    }
    }
    
}
</script>

 <style scoped>
h4{
    margin: 10px;
}

 .cointainer{
    background: darkblue;
 }
 
 .topPart{
    border-bottom: 1px solid var(--primaryColor);
    background-position: right -200px top;
    background-size: cover;
    background-repeat: no-repeat;
    background: darkblue;
    min-height: 550px;
 }

 .itemImg{
    margin: 10px;
 }

.detailsPart{
    color:white;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    
}

.detailsPart .titleDown{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 60%;
}

.detailsPart .overview{
    max-width: 90%;
}
.detailsPart h2{
    margin-top:15px;
    font-weight: 700px !important;
}

.actorPart{
    display: flex;
    justify-content: flex-start;
    max-height: 300px;
    overflow-x: scroll !important;
    overflow-y: hidden;
}

::v-deep .v-card__title{
    word-break: break-word !important;
    font-size: 1.15rem;
}
 </style>