nodule.exports = {
    dveServer:{
        host:'localhost',
        port:8080,
        proxy:{   //代理
            '/api':{  //拦截
                target: 'https://www.imooc.com/',//代理到目标，内部访问目标
                changeOrigin:false, //是否把主机头更改为目标url地址
                pathRewrite:{
                    '/api':''

                }

            }
        }
    }
}