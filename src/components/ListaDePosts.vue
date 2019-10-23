<template>
  <div id="app">
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post of lista" :key="post.id">
          <td scope="row">{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.body}}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import posts from '../services/postService'

export default{
  data(){
    return{
      lista : []
    }
  },
  mounted(){
    posts.listarPosts().then(resposta => {
     this.lista = resposta.data
    })
  }
}

</script>

<style>

</style>
