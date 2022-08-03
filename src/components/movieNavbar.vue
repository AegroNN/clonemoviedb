<template>
<v-card min-width="100%">
    <v-app-bar
      color="blue"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      flat
    >
    <router-link
        to="/"
    >
      <v-toolbar-title class="white--text">Clone Movie DB</v-toolbar-title>
    </router-link>
        <v-menu
        open-on-hover
        bottom
        offset-y
        >
            <template v-slot:activator="{on, attrs}">
                    <v-btn
                    disable
                    v-bind="attrs"
                    v-on="on"
                    class="white--text ma-2"
                    outlined
                    >Movies</v-btn>
            </template>
            <v-list>
                <router-link
                :to="{name:'List', params:{type:'movie',listType:'popular'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Popular Movies</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link
                :to="{name:'List', params:{type:'movie',listType:'now_playing'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >On Going Movies</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link
                :to="{name:'List', params:{type:'movie',listType:'upcoming'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Coming Soon Movies</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link
                :to="{name:'List', params:{type:'movie',listType:'top_rated'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Best Movies</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-menu>
                <v-menu
        open-on-hover
        bottom
        offset-y
        >
            <template v-slot:activator="{on, attrs}">
                    <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="white--text ma-2"
                    outlined
                    >Series</v-btn>
            </template>
            <v-list>
                <router-link
                :to="{name:'List', params:{type:'tv',listType:'popular'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Popular Series</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link
                :to="{name:'List', params:{type:'tv',listType:'on_the_air'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Airing Today Series</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link
                :to="{name:'List', params:{type:'tv',listType:'airing_today'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Coming Soon Series</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link
                :to="{name:'List', params:{type:'tv',listType:'top_rated'}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Best Series</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-menu>
      <v-spacer></v-spacer>
      
      <v-text-field 
      v-show="searchShow"
      v-model="queryString"
      rounded
      solo
      dense
      placeholder="Ara..."
      append-icon="mdi-send"
      @click:append="goToSearchResult"
      @keyup.enter="goToSearchResult"
      >
      </v-text-field>
      <v-btn icon
      @click="searchShow=!searchShow"
      >
        <v-icon class="white--text">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon class="white--text">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon class="white--text">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</v-card>
</template>

<script>
export default {
    data(){
        return{
            searchShow:false,
            queryString:"",
        }
    },
    methods:{
        goToSearchResult(){
            this.$router.push({name:'List', params:{type:"Search",listType:this.queryString}})
            this.queryString=""
            this.searchShow=false
        }
     }
}
</script>

<style scoped>
a{
    text-decoration: none;
} 

::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details{
    display: none;
}
</style>