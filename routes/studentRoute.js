const express =require("express");
const route= express.Router();

route.get("/",(req,res)=>{
    res.send("<h1>student home page</h1>");
})


route.get("/stuinfo",(req,res)=>{
    res.send("<h1>student information</h1>");
})

route.get("/stufees",(req,res)=>{
    res.send("<h1>student fees</h1>");
})

module.exports=route;