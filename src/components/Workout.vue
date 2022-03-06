<template>
<div class="container">
    <div class="navi">
    </div>
    <div class="panel" v-if="!isMobile">
        <div class="left_panel">
            <div class="image">
            <img :src="$route.params.image" alt="" width=100% min-height=350px/>
            </div>
            <h3>Kategoria: {{$route.params.category}}</h3>
            <h3>Poziom zaawansowania: {{$route.params.level}}</h3>
            <h3>Wymagany sprzęt: {{$route.params.equipment}}</h3>
        </div>
         <div class="right_panel">
           <h1>{{$route.params.name}}</h1> 
           {{$route.params.description}}
        </div>
        <router-link to="/library"><button>Wróć</button></router-link>
    </div>
    <div class="mobile_panel" v-if="isMobile">
        <h1>{{$route.params.name}}</h1>
        <div class="image">
            <img :src="$route.params.image" alt="" width=100% min-height=350px/>
        </div>
        <h3>Kategoria: {{$route.params.category}}</h3>
        <h3>Poziom zaawansowania: {{$route.params.level}}</h3>
        <h3>Wymagany sprzęt: {{$route.params.equipment}}</h3>
        {{$route.params.description}}
        <router-link to="/library"><button>Wróć</button></router-link>
    </div>
</div>

</template>

<script>

export default {
  data() {
    return{
      isMobile:true,
    }
  },
  created() {
    window.addEventListener('resize',this.checkScreen);
    this.checkScreen();
  },
  methods:{
      checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
      return;
    },
    toggleMobileView(){
      this.isMobile = !this.isMobile;
    },
  }
}
</script>



<style scoped lang="scss">
.container{
    
    text-align:center;
    display:block;
    width:100%;
    min-height:1200px;
    .navi{
        width:100%;
        min-height:120px;
    }
    .panel{
    width:60%;
    min-height:700px;
     
    margin-left:18%;
    margin-right:18%;
    
        .left_panel{
            padding:10px;
            
            width:30%;
            float:left;
            min-height:550px;
            margin: 10px;
            .image{

                width:99%;
            }
        }
        .right_panel{
            width:60%;
            float:right;
            min-height:550px;
            margin: 10px;
        }
    }
    .mobile_panel{
        text-align:center;
            .image{
                
                width:93%;
                padding:20px;
            }
            button{
                width:95%;
            }
    }

}
button{   
        padding:10px;
        background: rgb(255,255,255);
        background: linear-gradient(352deg, rgba(255,255,255,1) 0%, rgba(148,148,148,1) 100%);
        width:20%;
        color:white;
        font-size:25px;
        font-weight: bold;
        float:right;
        margin:10px;
 }
button:hover{
   color:green;
 }

 @media only screen and (max-width: 1500px) {
 .container{
     .panel{
         width:65%;

         .left_panel{
             width:40%;
         }
         .right_panel{
             width:50%;
         }
     }
 }
  
}
@media only screen and (max-width: 1000px) {
 .container{
     .panel{
         width:80%;

         .left_panel{
             width:40%;
         }
         .right_panel{
             width:45%;
         }
     }
 }

}
 @media only screen and (max-width: 450px) {
 .container{
   .mobile_panel{
        text-align:center;
            .image{
                
                width:90%;
                padding:20px;
            }
    }
}
}
</style>