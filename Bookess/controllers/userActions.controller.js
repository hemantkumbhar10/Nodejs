const UserAction = require('../models/useraction.model');
const User = require('../models/signup.model');
const Auth = require('../middleware/verifyToken');


exports.createUserAction = async(req,res)=>{
    const requserid = res.id;
    await UserAction.findOne({requserid}).exec((err, user)=>{
        if(err){
            return res.status(500).send(err)
        }
        if(!user){
            User.findById(requserid).exec((err,user)=>{
            if(err){
                res.status(500).send(err);
            };
            const useraction = new UserAction({
                userid: req.id,
                username: user.fullname,
                readlater:[],
                liked:[]
            });
    
            useraction.readlater.push(req.body.readlater);
            useraction.liked.push(req.body.liked);
    
            useraction.save((err)=>{
                if(err){
                    return res.status(500).send(err);
                };
    
                return res.json({
                    userid: useraction.userid,
                    username: useraction.username,
                    readlater:useraction.readlater,
                    likedbooks: useraction.liked
                });
            });
        });
        }else{
            UserAction.findOne({requserid}).exec((err,user)=>{
                if(err){
                    res.status(500).send(err);
                };
                user.readlater.push(req.body.readlater);
                user.liked.push(req.body.liked);
                user.save();
                return res.json(user);
            });
        }
    });
};;


exports.getUserAction = async(req,res)=>{
    const userid = res.id;
    UserAction.findOne({userid}).exec((err, user)=>{
        if(err){
            return res.status(500).send(err);
        };

        if(!user){
            return res.status(404).send({message : "No actions found!"});
        };

        return res.json(
            {
                userid: user.userid,
                username: user.username,
                readlater:user.readlater,
                likedbooks: user.liked
            }
        );

    });
};

