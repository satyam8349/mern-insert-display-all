

const express = require("express");
const app= express();
const mongoose=require("mongoose");
const StuRouts=require("./routes/studentsRoute");
mongoose.connect("mongodb://127.0.0.1:27017/Satyam").then();


app.use("/students",StuRouts);

app.listen(9000,()=>{
  console.log("server iss running in port 9000");
})


