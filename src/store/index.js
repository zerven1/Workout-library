import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCategory:null,
    currentEquipment:null,
    currentLevel:null,
    currentSort:null,
  },
  mutations: {
    setCurrentCategory(state,cat){
      state.currentCategory=cat;
    },
    setCurrentEquipment(state,eq){
      state.currentEquipment=eq;
    },
    setCurrentLevel(state,lev){
      state.currentLevel=lev;
    },
    setCurrentSort(state,sort){
      state.currentSort=sort;
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getCurrentCategory: state => state.currentCategory,
    getCurrentEquipment: state => state.currentEquipment,
    getCurrentLevel: state => state.currentLevel,
    getCurrentSort: state => state.currentSort,
    }
})
