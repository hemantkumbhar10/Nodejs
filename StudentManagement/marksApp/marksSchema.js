const mongoose = require('mongoose');

const marksSchema = mongoose.Schema({
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

const Marks = mongoose.model('marks', marksSchema);

module.exports = Marks;