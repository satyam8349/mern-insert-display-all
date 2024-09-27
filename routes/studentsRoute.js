const express =require("express");
const route=express.Router();
const StuController=require("../controller/studentController");


route.get("/stuinfo",StuController.stuInfo);
// route.get("/stufees",StuController.stuFees);
// route.get("/sturesult",StuController.stuResult);

module.exports=route;

