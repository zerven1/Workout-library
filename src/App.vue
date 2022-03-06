<template>
  <div id="app">
    <div id="nav">
      <NavBar></NavBar>
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default ({
  components: {
    NavBar
  }
  })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin:0;
  padding:0;
  
}
#nav{

}
#nav a {
  font-weight: bold;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
  
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  margin:0;
}
</style>
