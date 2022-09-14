const mongoose = require('mongoose')
require('dotenv').config({path:'../.env'});

const MONGODB_URI = process.env.MONGODB_URI;

main().catch((error)=>{console.log('error occured :(', error)});

async function main(){
    mongoose.connect(MONGODB_URI, {useUnifiedTopology:true,useNewUrlParser:true});
    console.log('Mongo is running ;)')
};
