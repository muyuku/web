import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home' //导入home页面
// import Login from './pages/login'
import Index from './pages/index'
//import Product from './pages/product' //产品站
//import Detail from './pages/detail' //详情页面
// import Cart from './pages/cart' //购物车
// import Order from './pages/order' //订单
// import OrderConfirm from './pages/orderConfirm' //订单确认
// import OrderList from './pages/orderList' //订单列表
// import OrderPay from './pages/orderPay' //订单支付
// import AliPay from './pages/alipay' //订单支付


Vue.use(Router); //使用vue加载Router插件

export default new Router({ //导出router
    routes:[            //配置router
        {
            path:'/',
            name:'home',
            component:Home, //根路由
            redirect:'/index',//重定向嵌套index
            children:[      //配置子路由
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'/product/:id', //动态子路由id
                    name:'product',
                    component: () => import('./pages/product.vue')
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component: () => import('./pages/detail.vue')
                },

            ]
        },
        {
            path:'/login',
            name:'login',
            component: () => import('./pages/login.vue')
        },
        {
            path:'/cart',
            name:'cart',
            component: () => import('./pages/cart.vue')
        },
        {
            path:'/order',
            name:'order',
            component: () => import('./pages/order.vue'),
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component: () => import('./pages/orderList.vue')
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component: () => import('./pages/alipay.vue')
                },
            ]
        },
    ]
});