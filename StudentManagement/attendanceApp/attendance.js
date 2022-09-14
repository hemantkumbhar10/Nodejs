const express = require('express');
const Attendance = require('./attendanceSchema');

require('../db/db');

const port = 3002;
const app = express();

app.use(express.json());


app.post('/attendance', async(req,res)=>{
    const {id} = req.params;
    const newAttendance = new Attendance({...req.body});

    try{
        const newAtt = await newAttendance.save();
        res.send(newAtt);
    }catch(error){
        console.log('Error occured:',error)
    }
});

app.get('/attendance', async(req,res)=>{
    try{
        const allAttendance = await Attendance.find({});
        res.send(allAttendance);
    }catch(error){
        console.log('Error occured:',error)
    }
});

app.get('/attendance/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const foundAttendance = await Attendance.findById(id);
        res.send(foundAttendance);
    }catch(error){
        console.log('Error occured:',error)
    }
});

app.put('/attendance/:id', async(req,res)=>{
    const {id} = req.params;
    const attend = req.body;
    try{
        const updatedAttendace = await Attendance.findByIdAndUpdate(id, attend);
        res.send(updatedAttendace);
    }catch(error){
        console.log('Error occured:',error)
    }
});


app.delete('/attendance/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        await Attendance.findByIdAndDelete(id);
        res.redirect('/attendance');
    }catch(error){
        console.log('Error occured:',error)
    }
});

app.listen(port, () => {
    console.log(`Up and Running on port ${port} - This is Order service`);
})

