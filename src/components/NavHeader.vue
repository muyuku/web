<template>
    <div class="header">
        <div class="nav-topbar"><!--顶部导航条1-->
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">商城</a>
                    <a href="javascript:;">UI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login()">登录</a>
                    <a href="/#/order/list" v-if="username">我的订单</a>
                    <a href="javascript:;" v-if="username" @click="outLogin()">退出</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span >购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">    <!--顶部导航条2-->
            <div class="container">
                <div class="header-logo"><!--logo-->
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu"> <!--导航菜单-->
                    <div class="item-menu">
                        <span>X系列</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a v-bind:href="'/#product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>                        
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>V系列</span>
                        <!-- <div class="children"></div> -->
                    </div>
                    <div class="item-menu">
                        <span>B系列</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">CC9</div>
                                        <div class="pro-price">199元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">CC9</div>
                                        <div class="pro-price">199元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg"  alt="">
                                        </div>
                                        <div class="pro-name">CC9</div>
                                        <div class="pro-price">199元</div>
                                    </a>
                                </li>
                                 <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">CC9</div>
                                        <div class="pro-price">199元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>  
                </div>
                <div class="header-search"><!--导航搜索-->
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import {mapState} from 'vuex' 
export default {
    name:'nav-header',
    data(){
        return {
            
            phoneList:[]
        }
    },
    computed: { 
        username(){
            return this.$store.state.username; //.读取
        },
        cartCount(){
            return this.$store.state.cartCount; //.读取
        }
        // ...mapState(['username','cartCount'])//辅助函数方式
    },
    filters:{ //过滤器 金11额
        currency(val){
            if(!val) return;
            return '￥' + val.toFixed(2) +'元'; //四舍五入2位
        }
    },
    mounted(){
        this.getProductList();
        this.getCarCount();
    },
    methods: {
        login(){
            this.$router.push('/login');
        },
        outLogin(){
            this.axios.post('/user/logout',{ 
               
            }).then(()=>{
                this.$cookie.set('userId','',{expires:'-1'});
                this.$store.dispatch('saveUserName','');
                this.$store.dispatch('saveCartCount','0');
                this.$message.info("退出成功");

            })
        },
        getCarCount(){
            if(!this.username) return;
            this.axios.get('/carts/products/sum').then((res=0)=>{
                this.$store.dispatch('saveCartCount',res);
            })
        },
       
        getProductList(){
            this.axios.get('/products',{ 
                params:{
                    categoryId:'100012',
                    pageSize:6
                }
            }).then((res)=>{
            //    if(res.list.length>=6){
                   this.phoneList = res.list;
            //    } 
            })
        },
        goToCart(){
            this.$router.push('/cart');
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container{
                @include flex();
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 100px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #ffffff;
                    margin-right: 0;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{    
            .container{
                height: 112px;
                position: relative;
                @include flex();
                
                .header-menu{
                    display:inline-block;
                    width: 643px;
                    padding-left:209px;;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 15px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                          color: $colorA;
                          .children{
                              height: 220px;
                              opacity: 1;
                          }  
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;  
                            opacity: 0; //元素透明级别
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            z-index: 10;
                            transition: all  .5s; //控制属性做动画，all代表所有
                            background-color: #ffffff;
                            .product{
                                position: relative;
                                float:left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    height: 111px;
                                    width: auto;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 137px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    color: $colorA;
                                }
                                &:before{      //伪类
                                    content: '';//占位
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child:before{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right:1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }
            }

        }
    }

</style>