// const express = require("express");
// const app = express();
// app.get("/home",(req,res)=>{
//     res.send("<h1> this is my hoe paage!!</h1>");
// })


// app.get("/about",(req,res)=>{
//     res.send("<h1> this is my about page!!</h1>");
// })

// app.listen(800);






// const express = require("express");
// const app= express();
//  const PORT=8000;

//  app.length("/" ,(req,res)=>{
//     res.send("<h1>welcome to cybron!!");
//  })
//  app.listen(PORT,()=>{
//     console.log(`listening run:${PORT}`);
//  })





const express =require("express");
const app = express();
 const PORT= 5000;
 const StuRoute =require("./routes/studentRoute")


 
 app.get("/" ,(req,res)=>{
    res.send("<h1> homepage in screen ")

 })
 app.use("/students",StuRoute)
 
 app.listen(PORT,()=>{
    console.log('SERVER RUN:${PORT}')
 })