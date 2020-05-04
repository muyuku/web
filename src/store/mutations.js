 /**
  * 商城vuex-mutations
  */
 export default{
      saveUserName(state,username){
        state.username = username; //改变状态
      },
      saveCartCount(state,count){
        state.cartCount = count; 
      }
 }