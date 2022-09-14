const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const StudentAuthSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})


const studentauth = mongoose.model('StudentAuth', StudentAuthSchema);

module.exports = studentauth;