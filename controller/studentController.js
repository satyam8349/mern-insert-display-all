const StuModel = require("../models/studentModel");

const stuInfo = (req, res) => {
  res.send("this is student information");
};

const studataSaver = (req, res) => {
  const { rollno, name, age } = req.body;
  const student = new StuModel({
    rollno: rollno,
    name: name,
    age: age
  });
  student.save();
  res.send("student data successfully saved");
};

const studentDisplay=async(req,res)=>{
   const studata= await StuModel.find();
   res.send(studata);
}

const studentsearch=async(req,res)=>{
  const {rollno}=req.body;
  const data=await StuModel.find({"rollno":rollno});
  console.log(data);
  res.send(data);
}


const saveCreate=async(req,res)=>{
  const {eroll, ename, eage}=req.body;
  const myData=await StuModel.create({
    rollno:eroll,
    name:ename,
    age: eage
  })
  res.send("data create sussessfully");
}


const queryboathSerch=async(req,res)=>{
  const {name,age}=req.query;
  const data= await StuModel.find({$and:[{"name":name},{"age":age}]});
  res.send( data);
}





module.exports = {
  stuInfo,
  studataSaver,
  studentDisplay,
  studentsearch,
  saveCreate,
  queryboathSerch
};









