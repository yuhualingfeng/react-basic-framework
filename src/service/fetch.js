/**
 * 异步请求
 * @param {请求地址} url 
 * @param {请求配置} option 
 * option.type | 请求的类型 | String | default:GET 
 * option.data | 请求传递的参数 | Object    
 * option.contentType | 请求的文本类型 | String | default:application/json;charset=utf-8
 * option.mode | 请求模式(是否跨域) | String 
 * 
 */
function doFetch(url,option = {}){
    let combineOption = {
          credentials: 'include',
          headers: {
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Cache-Control':'no-store'
          }
    };
 
    combineOption.type = option.type ? option.type:'GET';
    combineOption.headers['Content-Type'] = option.contentType ? option.contentType :'application/json;charset=utf-8';
 
 
    let data = option.data ? option.data:{}; 
    if (combineOption.type.toLocaleUpperCase() === 'GET') {
         let dataStr = ''; //数据拼接字符串
         Object.keys(data).forEach(key => {
             dataStr += key + '=' + data[key] + '&';
         });
 
         if (dataStr !== '') {
             dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
             url = encodeURI(url + '?' + dataStr);
         }
     }else{
         combineOption.body = JSON.stringify(data);
    }
    if(option.mode === 'cors'){
       combineOption = undefined;
    }
    return fetch(url,combineOption).then((response)=>{
       return response.json();
    });
 }

 export default doFetch