const adminAction  = require('../controllers/admin.controller');
const ver = require('../middleware/verify');
const Auth = require('../middleware/verifyToken');


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, content-Type, Accept"
        );
        next();
    });

    app.post('/user',[ver.checkDuplicateMail, Auth.verifyToken, Auth.verifyAdmin], adminAction.createNewUser);

    app.get('/users',[Auth.verifyToken, Auth.verifyAdmin], adminAction.getAllUsers);

    app.get('/user/:id',[Auth.verifyToken, Auth.verifyAdmin], adminAction.getUserById);

    app.put('/user/:id',[Auth.verifyToken, Auth.verifyAdmin], adminAction.updateUserById);

    app.delete('/user/:id',[Auth.verifyToken, Auth.verifyAdmin], adminAction.deleteUserById);
}