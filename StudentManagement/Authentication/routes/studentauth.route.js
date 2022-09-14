const { checkDuplicateEmail } = require("../middlewares/studentauth.middleware");
const controller = require("../controller/studentauth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/signup", checkDuplicateEmail, controller.signup);

  app.post("/signin", controller.signin);

  app.post("/signout", controller.signout);
};
