<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//import axios from 'axios'

import Storage from './storage'

export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
     
    }
    
  },
  mounted(){
        Storage.setItem('user2',{d:2});
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
