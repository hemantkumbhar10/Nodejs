const action = require('../controllers/userActions.controller');
const Auth = require('../middleware/verifyToken');

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.post('/user/actions/',[Auth.verifyToken, Auth.verifyUser], action.createUserAction);

    app.get('/user/actions/details',[Auth.verifyToken, Auth.verifyUser], action.getUserAction);

};