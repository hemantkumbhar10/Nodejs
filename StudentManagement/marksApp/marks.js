const express = require('express');
const Marks = require('./marksSchema');

require('../db/db');


const port = 3001;
const app = express();

app.use(express.json());



app.post('/marks',async(req,res)=>{
    const newMarks = new Marks({...req.body});
    try{
        const addedMarks = await newMarks.save();
        res.send(addedMarks);
        console.log('Marks are created');
    }catch(error){
        console.log('somethings wrong: ',error);
    }
});

app.get('/marks',async(req,res)=>{
    try{
       const allMarks =  await Marks.find({});
       res.send(allMarks);
    }catch(error){
        console.log('somethings wrong: ',error);
    }
})

app.get('/marks/:id', async(req,res)=>{
    const {id} = req.params;

    try{
        const foundMarks = await Marks.findById(id);
        res.send(foundMarks);
    }catch(error){
        console.log('somethings wrong: ',error);
    }
});


app.put('/marks/:id', async(req,res)=>{
    const mark = req.body;
    const {id} =req.params;
    try{
        const updatedMarks = await Marks.findByIdAndUpdate(id, mark);
        res.send(updatedMarks);
    }catch(error){
        console.log('somethings wrong: ',error);
    }
});

app.delete('/marks/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        await Marks.findByIdAndDelete(id);
        res.redirect('/marks');
    }catch(error){
        console.log('somethings wrong: ',error);
    }
});

app.listen(port, () => {
    console.log(`Up and Running on port ${port} - This is Order service`);
})