<template>
  <div class="home">
    <div class="navi">
    </div>
    <div>
      <HomePage/>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>
<style scoped lang="scss">
.navi{
  width:100%;
min-height:120px;
}
</style>