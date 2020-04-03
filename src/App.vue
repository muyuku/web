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
     res:{}
    }
    
  },
  mounted(){
       //通过easy-mock平台实现数据mock
      //  this.axios.get('').then((res)=>{
      //   this.res = res;
      //  });
      //本地集成mockjs实现数据mock
      this.axios.get('/user/login').then((res)=>{
         this.res = res;
      });

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
