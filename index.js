const express = require("express");
const app= express();
const StuRouts=require("./routes/studentRoute");
const teacherRoute=require("./routes/teacherRoute");

app.use("/students",StuRouts);
app.use("/teachers",teacherRoute)/


 app.listen(8000,()=>{
   console.log("server is running on port 8000");
 })