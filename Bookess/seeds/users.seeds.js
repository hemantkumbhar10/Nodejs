const { default: mongoose } = require("mongoose");
const User = require("../models/signup.model");
require('../config/db');
const bcrypt = require('bcryptjs');

const users = [
  {
    fullname: "Jhon Doe",
    email: "Jhon.doe@gmail.com",
    password:bcrypt.hashSync("jhon@doe123", 8),
    role: "admin",
  },
  {
    fullname: "Michael Scofield",
    email: "michael.sc@yahoo.in",
    password: bcrypt.hashSync("fish@123", 8),
    role: "user",
  },
  {
    fullname: "Alex Mahone",
    email: "alex.mahone@gmail.com",
    password: bcrypt.hashSync("alex@123", 8),
    role: "admin",
  },
  {
    fullname: "Sara Tancredi",
    email: "sara@gmail.com",
    password: bcrypt.hashSync("sara@123", 8),
    role: "user",
  },
  {
    fullname: "Mathew Murdock",
    email: "mat.murdock@gmail.com",
    password: bcrypt.hashSync("daredevil@123", 8),
    role: "admin",
  },
];

const seedDB = async()=>{
    // await User.deleteMany({});
    await User.insertMany(users);
    console.log('Fake user data added to mongo :)');
};

seedDB().then((err)=>{
    mongoose.connection.close();
});
