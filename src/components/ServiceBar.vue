<template>
    <div class="service">
       <div class="container">
           <ul>
               <li><span class="icon-setting"></span>售后服务</li>
               <li><span class="icon-7day"></span>7天无理由退货</li>
               <li><span class="icon-15day"></span>15天免费换货</li>
               <li><span class="icon-post"></span>满150元包邮</li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    name:'service-bar' //模板名
}
</script>

<style lang="scss" >
@import './../assets/scss/mixin.scss';
   .service{
       padding: 33px 0;
       color: #666666;
       font-size: 16px;
       text-align: center;
       li{
           display: inline-block;
           width: 24.8%;
           text-align: center;
           border-right: 1px solid #E5E5E5;
       }
       span{
           display: inline-block;
           width: 20px;
           height: 20px;
           vertical-align: middle; //垂直对齐，放在父元素中部
           margin-right: 8px;
       }
       .icon-setting{
           @include bgImg(20px,20ox,'/imgs/icon-setting.png');
       }
       .icon-7day{
           @include bgImg(20px,20ox,'/imgs/icon-7day.png');
       }
       .icon-15day{
           @include bgImg(20px,20ox,'/imgs/icon-15day.png');
       }
       .icon-post{
           @include bgImg(20px,20ox,'/imgs/icon-post.png');
       }
   }
</style>