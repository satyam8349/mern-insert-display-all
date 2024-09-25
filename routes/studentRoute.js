
    

 const express=require("express");
 const route=express.Router();
 
 route.get("/stuinfo",(req,res)=>{
    res.send("<h1> this is route first path");
 })


 route.get("/stuifees",(req,res)=>{
    res.send("<h1> this is route seacond path");
 })


 route.get("/sturesult",(req,res)=>{
    res.send("<h1> this is route third path");
 })
 module.exports=route;