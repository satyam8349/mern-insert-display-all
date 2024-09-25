const express=require("express");
const route=express.Router();

route.get("/teacherinfo",(req,res)=>{
   res.send("<h1> this is teacher first path</h1>");
})

route.get("/teachersal",(req,res)=>{
    res.send("<h1> this is teacher second path</h1>");
 })

 route.get("/teacherdep",(req,res)=>{
    res.send("<h1> this is teacher third path</h1>");
 })
 module.exports=route;