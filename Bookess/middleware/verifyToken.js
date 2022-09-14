const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/signup.model');


verifyToken = (req,res,next)=>{
    let token = req.session.token;


    if(!token){
        return res.status(403).send({message:"Token not provided"});
    }

    jwt.verify(token,process.env.SECRET,(error, decoded)=>{
        if(error){
            return res.status(401).send({message: "Unauthorized Access!"});
        }
        req.id = decoded.id;
        next();
    });
};



verifyAdmin = (req,res,next)=>{
    User.findById(req.id).exec((err,user)=>{
        if(err){
            res.status(500).send(err);
        };
        if(user.role === "admin"){
            next();
            return;
        }
        res.status(403).send({message:"Sorry! Only Admins can access this!"});
        return;
    });
};


verifyUser = (req,res,next)=>{
    res.id = req.id;
    User.findById(req.id).exec((err,user)=>{
        if(err){
            res.status(500).send(err);
        };
        
        if(user.role === "user"){
            next();
            return;
        }
        res.status(403).send({message:"Sorry! Only users or admins can access this!"});
        return;
    });
};

verifyUserAdmin = (req,res,next)=>{
    User.findById(req.id).exec((err,user)=>{
        if(err){
            res.status(500).send(err);
        };
        if(user.role === "admin" || "user"){
            next();
            return;
        }
        res.status(403).send({message:"Sorry! Only Admins or Users can access this!"});
        return;
    });
};

const AccessAuth = {
    verifyToken,
    verifyAdmin,
    verifyUser,
    verifyUserAdmin
};


module.exports = AccessAuth;