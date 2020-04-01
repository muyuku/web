import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home' //导入home页面
import Index from './pages/index'
import Product from './pages/product' //产品站
import Detail from './pages/detail' //详情页面
import Cart from './pages/cart' //购物车
import Order from './pages/order' //订单
import OrderConfirm from './pages/orderConfirm' //订单确认
import OrderList from './pages/orderList' //订单列表
import OrderPay from './pages/orderPay' //订单支付
import AliPay from './pages/alipay' //订单支付


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
                    component:Product,
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:Detail,
                },

            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList,
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:OrderConfirm,
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay,
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:AliPay,
                },
            ]
        },
    ]
});