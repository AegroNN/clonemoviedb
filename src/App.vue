<template>
  <div id="app">
    <movieMain></movieMain>
  </div>
</template>

<script>
import movieMain from './components/movieMain.vue'

export default {
  name: 'App',
  components: {
    movieMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
