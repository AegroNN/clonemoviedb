<template>
    <div class="main">
        <navbar></navbar>
        <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        min-height="400"
        >
            <v-container style="height: 1500px;">
                <h1>Welcome to the clone movie db</h1>
            </v-container>
        </v-sheet>
        
    </div>
</template>

<script>
import navbar from './movieNavbar.vue'

export default {
    name: "movieMain",
    components: { 
        navbar
     }
}
</script>

<style scoped>
.main{
    align-items: center;
}
h1{
    text-align: center;
}
</style>