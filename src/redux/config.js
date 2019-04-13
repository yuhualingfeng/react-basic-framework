
/**
 * 异步请求配置文件
 * */
let configs = [
    {
       name:'GITHUB',
       reduxName:'github',
       url:'https://api.github.com/users/yuhualingfeng',
       option:{data:{name:1},mode:'cors'}

    },{
       name:'CONFIG_FILE',
       reduxName:'configFile',
       url:'./package.json'
    }
];
export default configs