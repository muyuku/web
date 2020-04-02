/*Storage封装 */
const STORAGE_KEY = 'mall';
export default{
    //存储值
    setItem(key,value,module_name){
        if(module_name){  //模块一级属性下追加二级属性
            let val = this.getItem(module_name);//获取一级属性
            val[key] = value;               //一级属性新的二级属性
            this.setItem(module_name,val);  //增加设置新的二级属性
        }else{
            let val = this.getStorage();    //获取整个数据
            val[key] = value;               //新一级属性
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val)); //mall下存储新一级属性
        }
    },
                //获取某个模块一级属性的二级属性
    getItem(key,module_name){
        if(module_name){ //当有传递一级属性参数，递归获取一级属性返回二级属性,
            let val = this.getItem(module_name);
            if(val) return val[key]; 
        }   
        return this.getStorage()[key]; //返回模块一级属性
    },
    //获取整个数据
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    //清空某属性
    clear(key,module_name){
        let val = this.getStorage();    //获取整个数据
        if(module_name){
            if(!val[module_name]) return;
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val)); //mall下存储新一级属性
    }
}