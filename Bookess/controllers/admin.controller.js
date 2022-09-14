const User = require('../models/signup.model');
const bcrypt = require('bcryptjs');



exports.createNewUser = async (req, res) => {
    const user = await new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: `${
        req.body.role.toLowerCase() == "user"
          ? req.body.role.toLowerCase()
          : "user"
      }`,
    });
    user.save((err) => {
      if (err) {
        res.status(500).send({ message, err });
      }
      res.json({
        fullname: user.fullname,
        email: user.email,
        password: user.password,
        role: user.role,
      });
    });
};


exports.getAllUsers = async(req,res)=>{
    User.find({}).exec((err,users)=>{
        if(err){
            return res.status(500).send(err);
        };

        if(!users){
            return res.status(404).send({message:"Users not found!"});
        }

        return res.json(users);
    });
};


exports.getUserById = async(req,res)=>{
    await User.findById(req.params.id).exec((err,user)=>{
        if(err){
            return res.status(500).send(err);
        };

        if(!user){
            return res.status(404).send({message:"User not found"});
        };
        return res.json(user);
    });
};


exports.updateUserById = async(req,res)=>{
  try{
    await User.findByIdAndUpdate(req.params.id, req.body);
    return res.json(req.body);
  }catch(err){
    return res.status(500).send(err);
  };
};


exports.deleteUserById = async(req,res)=>{
  try{
      await User.findByIdAndRemove(req.params.id);
      return res.status(200).send({message:"User successfully deleted"});
  }catch(err){
      return res.status(500).send(err);
  }
}