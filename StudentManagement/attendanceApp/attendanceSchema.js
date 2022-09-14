const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    english:{
        type:Number,
        required:true
    },
    hindi:{
        type:Number,
        required:true
    },
    science:{
        type:Number,
        required:true
    },
    history:{
        type:Number,
        required:true
    },
    mathematics:{
        type:Number,
        required:true
    }
});

const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = Attendance;
