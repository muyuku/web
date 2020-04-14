<template>
    <div class="nav-bar" :class="{'id_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'nav-bar',
    props: {title:String},
    data() {
        return {
            isFixed:false
        }
    },
    mounted () {
        window.addEventListener('scroll',this.initHeight);//绑定scroll事件，浏览器滚动能检测到
    },
    methods: {
        initHeight(){
            //获取滚动距离
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            this.isFixed = scrollTop >152?true:false;
        }
    },
    destroyed() { //事件销毁
        window.removeEventListener('scroll',this.initHeight,false);
    },
}
</script>

<style lang="scss">
 @import './../assets/scss/config.scss';
 @import './../assets/scss/mixin.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: $colorG;
        z-index: 10;
        &.id_fixed{
            position: fixed;
            top:0;
            width: 100%;
            box-shadow: 0 5px 5px $colorE;
        }
        .container{
            @include flex();
            .pro-title{
                font-size:$fontH;
                color: $colorB;
                font-weight: bold;
            }
            .pro-param{
                font-size:$fontJ;
                color: $colorC;
                span{
                    margin-right:10px;
                }
                a{
                    color:$colorC;
                    margin-right: 10px;  
                }
            }
        }
    }

</style>