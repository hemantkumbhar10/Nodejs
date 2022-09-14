const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config({path:'../../.env'})

const StudentInfo = require("../model/studentauth.model");

exports.signup = async(req, res) =>{
  try{
    const newStudent = await new StudentInfo({
      fullname: req.body.fullname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    newStudent
        .save()
        .then(() => {
          res.send(newStudent);
        })
        .catch((err) => {
          // res.send('Internal Server Error!');
        });
    
  }catch(err){
    res.status(501).send(err);
  }
}



exports.signin =  (req, res) =>{
    StudentInfo.findOne({
        email: req.body.email,
      }).exec((err, student) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
    
          if (!student) {
            return res.status(404).send({ message: "Student Not found." });
          }
    
          var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            student.password
          );
    
          if (!passwordIsValid) {
            return res.status(401).send({ message: "Invalid Password!" });
          }
    
          var token = jwt.sign({ id: student.id }, process.env.SECRET, {
            expiresIn: 86400, // 24 hours
          });
    
          req.session.token = token;
          res.status(200).send({
            id: student._id,
            fullname: student.fullname,
            email: student.email,
            token:token
          });
        });
};



exports.signout =  (req, res) =>{
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
      } catch (err) {
        this.next(err);
      }
};
