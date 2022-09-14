const StudentInfo = require('../model/studentauth.model');


module.exports.checkDuplicateEmail = (req, res, next) => {
  // Email
  StudentInfo.findOne({
    email: req.body.email,
  },(err, student) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (student) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }
    next();
  });
};
