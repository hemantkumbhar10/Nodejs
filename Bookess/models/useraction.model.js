const mongoose = require('mongoose');

const UserActionSchema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    username:{
        type:String,
    },
    readlater:[{}],
    liked:[{}]
});


const UserAction = mongoose.model('UserAction', UserActionSchema);

module.exports = UserAction;