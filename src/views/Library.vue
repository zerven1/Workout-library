<template>
  <div class="about">
    <div class="navi">
    </div>
    <div class="blank">
      <CategoryBar/>
      <ExcerciseList/>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import ExcerciseList from '@/components/ExcerciseList.vue'
import CategoryBar from '@/components/CategoryBar.vue'

export default {
  name: 'Home',
  components: {
    ExcerciseList,
    CategoryBar,
 
  },
  created() {
    window.addEventListener('resize',this.checkScreen);
    this.checkScreen();
  },
methods:{
      checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 1100){
        this.banner = false;
        return;
      }
      this.banner = true;
      return;
    }
}
}
</script>
<style scoped>
.navi{
  width:100%;
min-height:120px;
}
.blank{
    width:95%;
    min-height:900px;
    padding:50px;
}
   @media only screen and (max-width: 1250px) {

  .blank{
    padding:30px;
    }
  }
   @media only screen and (max-width: 750px) {

  .blank{
    padding:20px;
    }
  }
   @media only screen and (max-width: 550px) {

  .blank{
    padding:10px;
    }
  }

</style>