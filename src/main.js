import Vue from 'vue'
import router from './router' //导入router实例
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from  'vue-cookie'
import store from './store' //默认读取index.js
import App from './App.vue'
//import env from './env'
//mock开关
const mock = false;
if(mock){
  require('./mock/api');//import为预编译加载，所以需用require
}
//根据前端的跨域方式做调整 如代理
//axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5e877b032facda454720981f/mimall'; //基础值，easy-mock平台

axios.defaults.baseURL = '/api'  //接口代理方式
//方式2根据环境变量获取不同请求地址
//axios.defaults.baseURL = env.baseURL;
//超时设置
axios.defaults.timeout = 8000;

//接口错误拦截
axios.interceptors.response.use(function(response){ 
  let res = response.data; //获取接口返回值
  let path = location.hash;
  if(res.status == 0){ 
    return res.data;
  }else if(res.status == 10){ //未登录
    if(path != '#/index'){
       window.location.href = '/#/login';//#为哈希路由 
    }
    return Promise.reject(res);
  }else{
    alert(res.msg);
    return Promise.reject(res);
  }
});


Vue.use(VueAxios,axios) //加载插件，后面可通过this调用
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router, //加载路由,当路由名为routers时需要改为router:routers,
  
  render: h => h(App),
}).$mount('#app')
