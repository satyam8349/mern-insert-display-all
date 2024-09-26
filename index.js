

const express = require("express");
const app= express();
const StuRouts=require("./routes/studentsRoute");


app.use("/students",StuRouts);

app.listen(9000,()=>{
  console.log("server iss running in port 9000");
})


