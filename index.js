

var express= require('express')
var routes=require('./Routes/routes')

var app=express()

routes.route(app)
// var http=require('http')

app.get('/',(req,res)=>{
    res.send({"status":200,"data":"server running"})
})
app.listen(3000,()=>{console.log("server started on 3000")})

