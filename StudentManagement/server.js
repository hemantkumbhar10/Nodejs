const express = require("express");
// const Student = require("./studentSchema");
// const Attendance = require('./Attendance/attendanceSchema');
// const Marks = require('./Marks/marksSchema');
require('dotenv').config({path:'./.env'});


const cors = require('cors');
const cookieSession = require('cookie-session');
const app =express();

var corsOptions = {
    origin:"http://localhost:8081",
    
};


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieSession({
    name:'Student-session',
    secret: process.env.SECRET_KEY,
    httpOnly:true,
}));

require('./db/db');

app.get("/",(req,res)=>{
    res.json({
        message:'Welcome to student management system'
    })
});

require('./Authentication/routes/studentauth.route')(app);
// app.use('/student', )
require('./studentApp/student');

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});



