<template>
    <v-container class="popularPart">
                <v-toolbar
                dark
                elevation="0"
                width="100%"
                >
                    <v-toolbar-title>{{title}}</v-toolbar-title>
                <v-tabs
                class="popularTabs"
                align-with-title
                right
                >
                <v-tab v-for="tab in tabList" :key="tab">
                    {{tab}}
                </v-tab>

                <v-tab-item>
                    <div class="d-flex align-flex-start justify-flex-start">
                        <v-col v-for="item in items" :key="item.id" class="sm-4 d-flex justify-center">
                            <item-card :itemData="item"/>
                        </v-col>
                    </div>
                </v-tab-item>
                </v-tabs>
                </v-toolbar>
            </v-container>
</template>

<script>
import itemCard from "./itemCard.vue"

export default {
    name:"mainListPart",
    components:{ 
        itemCard,       
    },
    props:[
        "itemList",
        "title",
        "tabs"
    ],
    data(){
        return{
            items:this.itemList,
            tabList:this.tabs
        }
    },
    created(){
        console.log(this.item)
    }
}
</script>

<style scoped>

</style>
