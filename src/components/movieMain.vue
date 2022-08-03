<template>
    <div class="main">
        <navbar
        ></navbar>
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
                    v-model="queryString"
                    rounded
                    type="text"
                    placeholder="Film, dizi veya kişi ara..."
                    clearable
                    append-icon="mdi-send"
                    solo
                    ></v-text-field>
                </div>
                </div>
            </v-card>
                <main-list-part :itemList="popularList" :title="popularTitle" :tabs="popularTabs"/>
                <v-divider></v-divider>
        </div>
    </div>
</template>

<script>
import navbar from './movieNavbar.vue'
import listGetter from "@/services/lists.js"
import mainListPart from "./mainListParts.vue"

export default {
    name: "movieMain",
    components: { 
        navbar,
        mainListPart
     },
     data(){
        return{
        popularList:[],
        popularTitle:"Popüler olanlar",
        popularTabs:[
            "Yayın Akışı",
            "Televizyonda",
            "Kiralık",
            "Sinemalarda"
        ],
        queryString:""
        }
     },
     created(){
        listGetter.getPopularPart()
        .then(response=>{
            let result = response.data.results
            for(let key in result){
                this.popularList.push({...result[key]})
            }
        }).catch(e=>console.log(e))
     },
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