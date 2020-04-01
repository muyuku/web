import Vue from 'vue'
import router from './router' //导入router实例
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router, //加载路由,当路由名为routers时需要改为router:routers,
  render: h => h(App),
}).$mount('#app')
