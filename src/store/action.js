/**
  * 商城action
  */
 export default{
     saveUserName(context,username){
       context.commit('saveUserName',username); //调用mutation改变状态
     },
     saveCartCount(context,count){
      context.commit('saveCartCount',count);
    }
}