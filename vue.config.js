module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{   //代理
            '/api':{  //拦截
                target: 'http://mall-pre.springboot.cn',//代理到目标，内部访问目标
                changeOrigin:true, //是否把主机头更改为目标url地址
                pathRewrite:{
                    '/api':''

                }

            }
        }
    },
   
    productionSourceMap:false,
     chainWebpack:(config)=>{
         config.plugins.delete('prefetch');
       }
}