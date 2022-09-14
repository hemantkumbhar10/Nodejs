const jwt = require("jsonwebtoken");
require('dotenv').config({path:'../.env'});


module.exports.verifyToken = (req, res, next) => {
    console.log(req.body);
    const authHeader = req.headers["authorization"]
    const token = authHeader?.split(" ")[1]

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  try{
    const decoded = jwt.verify(token, process.env.secret)
        req.decoded = decoded;
  }catch(err){
    return res.status(401).send({ message: "Unauthorized!" });
  }
    return next();
  };
//   var bearerHeader = req.headers['authorization'];
//   var token;
//   console.log(bearerHeader);
//   req.authenticated = false;
//   if (bearerHeader){
//       console.log("11111");
//       var bearer = bearerHeader.split(" ");
//       token = bearer[1];