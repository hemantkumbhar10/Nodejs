const express = require("express");
const Student = require("./studentSchema");
const { verifyToken } = require("../Authorize/tokenAuthorize");
const axios = require("axios");
const mongoose = require("mongoose");

require("../db/db");

const port = 3000;

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization");
  next();
});



app.post("/student",verifyToken,async (req, res) => {
  try {
      const newStudent = new Student({
        studentID: mongoose.Types.ObjectId(req.body.studentID),
        extraactivities: req.body.extraactivities,
        marks: req.body.marks,
        attendance: req.body.attendance,
      });
      newStudent
        .save()
        .then(() => {
          res.send(newStudent);
        })
        .catch((err) => {
          // res.send('Internal Server Error!');
        });
    
  } catch (err) {

    res.status(404).send(err);
  }
  // const student = await AuthStudent.findById(req.body.studentID);
  // console.log(student);
  // const a = req;
  // const b = res;
  // verifyToken(a, b);
});

app.get("/student", async (req, res) => {
  try {
    const allStudent = await Student.find({});
    res.send(allStudent);
  } catch (error) {
    console.log("somethings wrong: ", error);
  }
});

app.get("/student/:id", async (req, res) => {
  try {
    const studentone = await Student.findById(req.params.id);
    if (studentone) {
      axios.get(`http://localhost:3005/auth/${studentone.studentID}`).catch((err)=>{
        // return res.status(402).send(err);
      });
      // console.log('hey i found your student', studentone);
    }else{
      res.status(404).send('Student not Found')
    }
    res.send(studentone);
  } catch (err) {
    console.log(err);
    return res.status(404).send({ messsage: "invalid id provided" });
  }
});

app.put("/student/:id", async(req, res) => {
  // await verifyToken(req, res);
  const studen = req.body;
  const { id } = req.params;
  try {
    const updatedStudent = Student.findByIdAndUpdate(id, studen);
    res.send(updatedStudent);
  } catch (error) {
    console.log("somethings wrong: ", error);
  }
});

app.delete("/student/:id", async (req, res) => {
  // verifyToken(req, res, next);
  const { id } = req.params;
  try {
    await Student.findByIdAndDelete(id);
    res.redirect("/student");
  } catch (error) {
    console.log("somethings wrong: ", error);
  }
});

app.listen(port, () => {
  console.log(`Up and Running on port ${port}`);
});
