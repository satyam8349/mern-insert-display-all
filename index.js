






// const express = require("express");
// const app= express();
//  const PORT=8000;

//  app.length("/" ,(req,res)=>{
//     res.send("<h1>welcome to cybron!!");
//  })
//  app.listen(PORT,()=>{
//     console.log(`listening run:${PORT}`);
//  })





// const express =require("express");
// const app = express();
//  const PORT= 5000;
//  const StuRoute =require("./routes/studentRoute")


 
//  app.get("/" ,(req,res)=>{
//     res.send("<h1> homepage in screen ")

//  })
//  app.use("/students",StuRoute)
 
//  app.listen(PORT,()=>{
//     console.log('SERVER RUN:${PORT}')
//  })




// const express=require("express");
// const app=express();
// const PORT=4000;
// const StuRoute=require("./routes/studentRoute")

// app.get("./",(req,res)=>{
//    res.send("<h1> home page in screen!!!");
// })

// app.use("/teacher",StuRoute)
// app.listen(PORT,()=>{
//    console.log(`server run:${PORT}`)
// })


// const http=require("http");
//  http.createServer((req,res)=>{
//     res.write("<h1>hello friends this is my first mern program  ");
//     res.end();
//  }).listen(4000);
 
  

const express = require("express");
const app=express();
app.get("/",(req,res)=>{
   res.send("<h1>home page in screen!!!");
})
app.listen(5000);