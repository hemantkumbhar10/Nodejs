const User = require("../models/signup.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config({path:'../.env'});

const secret = process.env.SECRET;

exports.signup = async (req, res) => {
  const user = await new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: `${
      req.body.role.toLowerCase() == ("admin" || "user")
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

exports.signin = async (req, res) => {
  await User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found! Enter valid credentials" });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);


    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ message: "Invalid credentials! Enter valid credentials" });
    }

    var token = jwt.sign({ id: user.id }, secret, {
      expiresIn: 86400, //1 day
    });

    req.session.token = token;
    res.status(200).send({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      token:user.session
    });
  });
};

exports.signout = (req,res)=>{
    try{
      req.session = null;
      return res.status(200).send({message: "You have been successfully logged out!"});
    }catch(err){
        this.next(err);
    }

}