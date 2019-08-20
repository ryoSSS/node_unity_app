const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
app.use('/', express.static('public/dist'))
 
// ルーティング設定
//app.use('/', require('./routes/index.js'));

var jsonData
/*
app.use('/',function(req,res){
    res.json()
})
*/

app.post('/urlServlet', function (req, res) {
    console.log(req.body)
    jsonData = req.body
})

app.post('/user', function(req,res){
    console.log("/user")
    res.json(jsonData)
})
  


app.listen(3000); 
console.log('Server running at http://localhost:3000')
