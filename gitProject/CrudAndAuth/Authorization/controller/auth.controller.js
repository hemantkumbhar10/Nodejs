require('dotenv').config();
const Student = require('../model/signup.model');


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


exports.signup = (req,res)=>{
    const student = new Student({
        fullname : req.body.fullname,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,8),
    });

    user.save((err,student)=>{
        if(err){
            res.status(500).send({message:err});
            return;
        }
    });
};


exports.signin = (req,res)=>{
    Student.findOne({
        email:req.body.email,
    }).exec((err,student)=>{
        if(err){
            res.status(500).send({message:error});
            return;
        }
        if(!student){
            return res.status(404).send({message:'Stduent not found'});
        }

        var passwordIsValid=bcrypt.compareSync(req.body.password,student.password);

        if(!passwordIsValid){
            return res.status(401).send({message:'Invalid Password'});
        }

        var token =jwt.sign({id:student.id},process.env.SECRET,{expiresIn:86400,});

        req.session.token = token;
        res.status(200).send({
            id:student._id,
            fullname:student.fullname,
            email:student.email
        });
    });
};


exports.signout = (req,res)=>{
    try{
        req.session =null;
        return res.status(200).send({message:"Successfully logged out"});
    }catch(err){
        this.next(err);
    }
}