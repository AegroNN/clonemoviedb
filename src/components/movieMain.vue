<template>
    <div class="main">
        <navbar></navbar>
        <div class="d-flex justify-center align-center flex-column" style="width:100%">
            <v-card class="welcome"
            tile
            width="90%"
            >
                <div style="width:90%">
                <h2>Hoş geldin!</h2>
                <h3>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi karşında.</h3>
                <div class="searchBar">
                    <v-text-field
                    rounded
                    filled
                    type="text"
                    placeholder="Film, dizi veya kişi ara..."
                    clearable
                    append-icon="mdi-send"
                    solo
                    ></v-text-field>
                </div>
                </div>
            </v-card>
            <v-container class="popularPart">
                <v-toolbar
                dark
                elevation="0"
                width="100%"
                >
                    <v-toolbar-title>Popüler olanlar</v-toolbar-title>
                <v-tabs
                class="popularTabs"
                align-with-title
                right
                >
                <v-tab>Yayın Akışı</v-tab>
                <v-tab>Televizyonda</v-tab>
                <v-tab>Kiralık</v-tab>
                <v-tab>Sinemalarda</v-tab>

                <v-tab-item>
                    <div class="d-flex align-flex-start justify-flex-start">
                        <v-col v-for="popularPart in popularPartList" :key="popularPart.id" class="sm-4 d-flex justify-center">
            <v-card elevation="2" outlined max-width="300" max-height="500">
                <v-img :src="'https://image.tmdb.org/t/p/w220_and_h330_face'+ popularPart.poster_path"
                max-height="330" 
                ></v-img>
                <v-card-title>{{popularPart.title}}</v-card-title>
                <v-card-text>
                    <div class="d-flex flex-row justify-space-between">
                        <v-rating
                        :value="popularPart.vote_average"
                        length="10"
                        readonly
                        hover
                        dense
                        half-increments
                        size="14"
                        ></v-rating>
                        <div class="grey--text ms-4">
                        {{popularPart.vote_average}}({{popularPart.vote_count}})
                        </div>
                    </div>
                    <v-divider class="mx-4"></v-divider>
                    <div>{{popularPart.release_date}}</div>
                </v-card-text>
            </v-card>
        </v-col>
                    </div>
                </v-tab-item>
                </v-tabs>
                </v-toolbar>
            </v-container>
        </div>
    </div>
</template>

<script>
import navbar from './movieNavbar.vue'
import listGetter from "@/services/lists.js"

export default {
    name: "movieMain",
    components: { 
        navbar
     },
     data(){
        return{
        popularPartList:[],

        }
     },
     created(){
        listGetter.getPopularPart(this.type,this.listType,this.pageNumber)
        .then(response=>{
            console.log(response)
            let result = response.data.results
            for(let key in result){
                this.popularPartList.push({...result[key],id:key})
            }
        }).catch(e=>console.log(e))
     }
}
</script>

<style scoped>
.main{
    align-items: center;
    min-height: 1000px;
    max-height: 100%;
}

.welcome{
    background: #63E5FF;
    height: 300px;
    color: white;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

::v-deep .container .popularPart{
    max-width: 90% !important;
}
.searchBar{
    display: flex;
    justify-content: center;
    width: 100%;
}

.popularPart{
    margin-top: 10px;
}

::v-deep .v-item-group{
    display: flex !important;
    justify-content: flex-start !important;
    overflow-x: scroll !important;
    overflow: hidden;
}
</style>