const User = require('../models/signup.model');

const checkDuplicateMail = (req,res,next)=>{
    User.findOne({email:req.body.email}).exec((err,user)=>{
        if(err){
            return res.status(500).send({message:err});
        }

        if(user){
            return res.status(400).send({message: 'User is already registered with this Email!'});
        }

        next();
    });
};


const verify = {
    checkDuplicateMail
}

module.exports = verify;