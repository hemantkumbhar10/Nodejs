const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({
    studentID:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
    },
    extraactivities:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    },
    attendance:{
        type:Number,
        required:true
    }

});


const Student = mongoose.model('student', studentSchema);

module.exports = Student;