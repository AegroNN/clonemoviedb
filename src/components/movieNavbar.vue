<template>
<v-card min-width="100%">
    <v-app-bar
      color="blue"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      shaped

    >
        <v-menu
        open-on-hover
        bottom
        offset-y
        >
            <template v-slot:activator="{on, attrs}">
                    <v-app-bar-nav-icon
                    v-bind="attrs"
                    v-on="on"
                    class="white--text"
                    ></v-app-bar-nav-icon>
            </template>
            <v-list>
                <router-link
                :to="{name:'popular', params:{popular}}"
                >
                    <v-list-item link>
                        <v-list-item-title >Popular Movies</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link
                :to="{name:'onGoing', params:{'now_playing':string}}"
                >
                    <v-list-item link>
                        <v-list-item-title >On Going Movies</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-menu>
    <router-link
        to="/"
    >
      <v-toolbar-title class="white--text">Clone Movie DB</v-toolbar-title>
    </router-link>
      <v-spacer></v-spacer>

      <v-btn icon>
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
        popular:"popular",
        onGoing:"now_playing"
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>