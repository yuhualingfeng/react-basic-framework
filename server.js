const express = require('express')
const path = require('path')
const port = 80
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
const broserHistory = false;

if(broserHistory)
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dev.html'))
})

app.listen(port)
console.log("server started on port " + port)