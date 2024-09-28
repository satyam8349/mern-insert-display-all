const StuModel = require("../models/studentModel");

const stuInfo = (req, res) => {
  res.send("this is student information");
};

const studataSaver = (req, res) => {
  const { rollno, name, age } = req.body;
  const student = new StuModel({
    rollno: rollno,
    name: name,
    age: age,
  });
  student.save();
  res.send("student data successfully saved");
};

module.exports = {
  stuInfo,
  studataSaver
};
