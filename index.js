

const express = require("express");
const app= express();
const mongoose=require("mongoose");
const StuRouts=require("./routes/studentsRoute");
const bodyParser=require('body-parser');


mongoose.connect("mongodb://127.0.0.1:27017/MyTable").then(()=>{
  console.log("Database connected")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/students",StuRouts);

app.listen(9000,()=>{
  console.log("server iss running in port 9000");
})


