<template>
  <div id="app">
    <h1>Vue JS</h1>
    <Post>
      <h2>componentes no vue</h2>
      <P>compenes sao peças bla bla bla</P>
    </Post>
  </div>
</template>

<script>
import Post from './components/Post.vue'

export default {
  components:{
    Post
  }
}

</script>