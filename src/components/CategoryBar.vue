<template>
  <div class="container">
      <div class="mobile-categories-button" >
        <ul>
          <li v-for="filter in filters" :key="filter.name" v-bind:class="active">
            <button @click="toggleMobile(filter.name)" v-bind:class=" { active: filter.active }">{{ filter.name }}</button>
          </li>
        </ul>
      </div>
        <transition >
          <ul id="example-1" class="dropdown-categories" v-show="mobileCat">
            <li v-for="category in categories" :key="category.name">
              <button @click="changeCategory(category.name)">  
              {{ category.name }}
              </button>
            </li>
          </ul>
        </transition>
        <transition>
          <ul id="example-1" class="dropdown-categories" v-show="mobileAdv">
            <li v-for="advanced in Advanced_levels" :key="advanced.name">
              <button @click="changeLevel(advanced.name)" >  {{ advanced.name }}</button>
            </li>
          </ul>
        </transition>
        <transition>
          <ul id="example-1" class="dropdown-categories" v-show="mobileEq">
            <li v-for="equipment in Equipments" :key="equipment.name">
              <button @click="changeEquipment(equipment.name)" >  {{ equipment.name }}</button>
            </li>
          </ul>
        </transition>
        <transition>
          <ul id="example-2" class="dropdown-categories" v-show="mobileSor">
            <li v-for="sort in Sorts" :key="sort.name">
              <button id="sort_button" @click="changeSort(sort.name)" >  {{ sort.name }}</button>
            </li>
          </ul>
        </transition>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'CategoryBar',
  components: {
      
  },
  computed:{

  },
  created() {
    window.addEventListener('resize',this.checkScreen);
    this.checkScreen();
  },
  methods:{
    toggleMobile(filter){
      if(filter==='Kategorie'){
        this.mobileCat = !this.mobileCat;
        this.mobileAdv=false;
        this.mobileEq=false;
        this.mobileSor=false;
        this.filters[0].active=!this.filters[0].active;
        this.filters[1].active=false;
        this.filters[2].active=false;
        this.filters[3].active=false;
      }
      if(filter==='Poziom trudności'){
        this.mobileAdv = !this.mobileAdv;
        this.mobileCat=false;
        this.mobileEq=false;
        this.mobileSor=false;
        this.filters[1].active=!this.filters[1].active;
        this.filters[0].active=false;
        this.filters[2].active=false;
        this.filters[3].active=false;
      }
      if(filter==='Wymagany sprzęt'){
        this.mobileEq = !this.mobileEq;
        this.mobileAdv=false;
        this.mobileCat=false;
        this.mobileSor=false;
        this.filters[2].active=!this.filters[2].active;
        this.filters[1].active=false;
        this.filters[0].active=false;
        this.filters[3].active=false;
      }
      if(filter==='Sortuj'){
        this.mobileSor = !this.mobileSor;
        this.mobileAdv=false;
        this.mobileCat=false;
        this.mobileEq=false;
        this.filters[3].active=!this.filters[3].active;
        this.filters[1].active=false;
        this.filters[2].active=false;
        this.filters[0].active=false;        
      }
    },
    changeCategory(categorie){
      if(categorie===null)
      {
      this.currentCategory=null;
      this.$store.commit('setCurrentCategory',this.currentCategory);
      }
      else{
         this.currentCategory=categorie;
         this.$store.commit('setCurrentCategory',this.currentCategory);
      }
    },
    changeLevel(level){
      if(level===null)
      {
      this.currentLevel=null;
      this.$store.commit('setCurrentLevel',this.currentLevel);
      }
      else{
         this.currentLevel=level;
         this.$store.commit('setCurrentLevel',this.currentLevel);
      }
    },
    changeEquipment(equipment){
      if(equipment===null)
      {
      this.currentEquipment=null;
      this.$store.commit('setCurrentEquipment',this.currentEquipment);
      }
      else{
         this.currentEquipment=equipment;
         this.$store.commit('setCurrentEquipment',this.currentEquipment);
      }
    },
    changeSort(sort){
      if(sort==='Brak')
      {
      this.currentSort=null;
      this.$store.commit('setCurrentSort',this.currentSort);
      }
      else{
         this.currentSort=sort;
         this.$store.commit('setCurrentSort',this.currentSort);
      }
    },
  },
  data: function () {
    return {
      categories: [
         { name: 'Klatka piersiowa' },
         { name: 'Barki' },
         { name: 'Biceps' },
         { name: 'Triceps' },
         { name: 'Nogi' },
         { name: 'Brzuch' },
         { name: 'Plecy' },
         { name: 'Inne'}
      ],
      filters:[
        {name: 'Kategorie', active:false},
        {name: 'Poziom trudności' ,active:false},
        {name: 'Wymagany sprzęt',active:false},
        {name: 'Sortuj',active:false},

      ],
      Advanced_levels:[
        {name: 'Nowicjusz'},
        {name: 'Początkujący'},
        {name: 'Średnio zaawansowany' },
        {name: 'Zaawansowany'},
      ],
      Equipments:[
        {name: 'Bez sprzętu'},
        {name: 'Hantle' },
        {name: 'Gryf prosty'},
        {name: 'Drążek'},
        {name: 'Kettlebell'},
        {name: 'Skakanka'},
        {name: 'Lina treningowa'},
        {name: 'Poręcze'}
      ],
      Sorts:[
        {name: 'Nazwa rosnąco'},
        {name: 'Nazwa malejąco' },
      ],
      mobile:null,
      mobileCat:false,
      mobileAdv:false,
      mobileEq:false,
      mobileSor:false,
      currentCategory:null,
      currentLevel:null,
      currentEquipment:null,
      currentSort:null
    }
  }
}
</script>

<style lang="scss" scoped>


.container{
    width:100%;
    min-height:50px;
    margin:0px 0px 0px 0px;
    float:left;
    display:inline-block;
    .mobile-categories-enter-active,
    .mobile-categories-leave-active{
      transition: 0.2s ease all;
    }
    
    .mobile-categories-leave-to{
      transform:translateY(-10px);
    }
    .mobile-categories-enter{
      transform:translateY(-10px);
    }
    ul li
    {
       display: inline-block;
       width:24.5%;
       font-weight: bold;
    }

}

.categories{
  margin-top:10px;
}
 ul {
  list-style-type: none;
  margin-left:12px;
  margin-right:7px;
  padding:0px;
  
 }

 button{
  border:1px solid black;
  padding:5px 10px 5px 10px;
  background: rgb(255,255,255);
  background: linear-gradient(352deg, rgba(255,255,255,1) 0%, rgba(148,148,148,1) 100%);
  width:100%;
  color:white;
  font-size:25px;
  font-weight: bold;
 }
 .active{
   background: linear-gradient(352deg, rgba(125,125,125,1) 0%, rgba(0,0,0,1) 100%);
   color:white;
 }
 button:hover{
   color:green;
 }
 .search_container{
   height:30px;
   margin:10px;
   button{
     padding:0px;
     font-size:15px;
   }
   #search{
      width:18%;
      height:50px;
   }
   .input{
    width:77%;
    height:45px;
    padding:0px;
   }
 }
 i{
   height:10px;
 }
 
  @media only screen and (max-width: 1310px) {

  ul li button{
    font-size:20px;
    font-weight: bold;
  }
 }
 @media only screen and (max-width: 1150px) {
    ul li button{
    font-size:15px;
    font-weight: bold;
  }

 }
  @media only screen and (max-width: 820px) {
    .container{
    margin-top:0px;
    ul li{
      margin:0px;
    }
   }
    ul li button{
    min-height:50px;
    font-size:10px;
    padding:0px;
    font-weight: bold;
  }

 }
  @media only screen and (max-width: 540px) {
    ul li button{
      font-weight: bold;
      font-size:6px;
    }

   }
</style>