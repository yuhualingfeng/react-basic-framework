const express = require('express')
const path = require('path')
const proxy = require('http-proxy-middleware');
const port = 80
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
//const broserHistory = false;
const broserHistory = true;

//代理地址配置
// var target = 'http://172.17.203.26:8080';//开发环境
// app.use(['/user-center/'],proxy({target: target, changeOrigin: true}));

if(broserHistory)
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev.html'))
})

app.listen(port)
console.log("server started on port " + port)