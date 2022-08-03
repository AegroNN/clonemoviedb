<template>
<div>
    <v-card elevation="2" outlined max-width="220" height="500" @click="goToDetails">
        <v-img :src="'https://image.tmdb.org/t/p/w220_and_h330_face'+ itemData.poster_path" 
        max-height="330" max-width="220"
        ></v-img>
        <v-card-title>{{itemData.title}}{{itemData.name}}</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
            <div class="d-flex flex-column justify-flex-start">
                <v-rating
                :value="itemData.vote_average"
                length="10"
                readonly
                hover
                dense
                half-increments
                size="14"
                ></v-rating>
                <div class="grey--text ms-4">
                {{itemData.vote_average}}({{itemData.vote_count}})
                </div>
            </div>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
    name:"itemCard",
    props:["itemData"],
    methods:{
        goToDetails(){
            if(this.itemData.name==undefined)
            {
            this.$router.push({name:'details', params:{type:"movie",itemId:this.itemData.id}})
            }
            else
            {
            this.$router.push({name:'details', params:{type:"tv",itemId:this.itemData.id}})
            }
        }
    }
}
</script>

<style scoped>
::v-deep .v-card__subtitle, .v-card__text, .v-card__title{
    padding: 10px;
}

::v-deep .v-application--is-ltr .ms-4{
    margin-left: 0 !important;
}
::v-deep .v-card__title{
    word-break: break-word !important;
    font-size: 1.15rem !important;
}
hr{
    margin: 10px;
}
</style>