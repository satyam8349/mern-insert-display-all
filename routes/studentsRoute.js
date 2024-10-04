const express =require("express");
const route=express.Router();
const StuController=require("../controller/studentController");


route.get("/stuinfo",StuController.stuInfo);
route.post("/datasaver",StuController.studataSaver);
route.get("/display",StuController.studentDisplay);
route.post("/search",StuController.studentsearch);
route.post("/create",StuController.saveCreate);
route.get("/bothserch",StuController.queryboathSerch);



module.exports=route;




