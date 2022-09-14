const mongoose = require('mongoose');


const AuthSchema = mongoose.Schema({
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
});


const SignupModel = mongoose.model('studentdetails', AuthSchema);

module.exports = SignupModel;
