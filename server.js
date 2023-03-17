var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var http = require('http')

var users = [{
    name: 'user',
    password: '123',
    email: 'user@gmail.com',
    role: 'user'
},{
    name: 'admin',
    password: '456',
    email: 'admin@gmail.com',
    role: 'admin'
}]
app.use(bodyParser.json())
app.post('/login', (req, res)=> {
    if(req.body.email && req.body.password){
        var email = users.filter((e)=>{
            return e.email == req.body.email.toLowerCase() &&  e.password == req.body.password
        })
        console.log(email)
        if(email.length){
            delete email.password;
            res.json({status:true, data: email})
        }else{
            res.json({status: false, error:{message: 'email or password missmatch.'}})
        }
        
    } else {
        res.json({status: false, error:{message: 'email or password cannot empty.'}})
    }
    
})
http.createServer(app).listen(3000)