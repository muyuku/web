
/**非代理方式跨域方式 CROUS跨域和jsonp跨域*/
let baseURL;
switch (process.env.NODE_ENV) { //获取进程的环境变量，写入进程
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;

    default:
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
}
export default{
    baseURL
}