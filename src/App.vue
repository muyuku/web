<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//import axios from 'axios'

//import Storage from './storage'

export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
     
    }
    
  },
  mounted(){
      if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
      

   },
   methods: {
     getUser(){
        this.axios.get('/user').then((res={})=>{
          if(!res) return;
            this.$store.dispatch('saveUserName',res.username);
        })
      },
      getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{
            this.$store.dispatch('saveCartCount',res);
        })
      }
   },
 }
</script>

<style lang='scss'>
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
