<template>
  <div id="app">
    <h2>Lista de posts</h2>
   <ListaDePosts />
  </div>
</template>

<script>
import ListaDePosts from './components/ListaDePosts.vue'

export default {
  name: 'app',
  components: {
    ListaDePosts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
