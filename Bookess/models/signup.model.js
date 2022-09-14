const mongoose = require('mongoose');



const signupSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String
    }
})

const User = mongoose.model('user', signupSchema);

module.exports = User;