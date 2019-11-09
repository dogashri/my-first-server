const express=require('express')
const app=express()
function uzzu(req,res){
    res.send("<h1>hello world</h1><h2>my name is rishabh singh</h2>");
}
app.get('/',uzzu)
app.listen(3333,()=>console.log("server started"))