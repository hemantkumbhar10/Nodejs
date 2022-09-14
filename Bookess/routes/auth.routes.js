const register = require('../controllers/signup.controller');
const ver = require('../middleware/verify');



module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });


app.post('/signup',ver.checkDuplicateMail, register.signup);

app.post('/signin', register.signin);

app.post('/signout',register.signout);

}