const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'});

const URI = process.env.MONGO_URI;
main().catch((err)=>console.log('Mongoose have error :( ', err));

async function main(){
    await mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true});
    console.log('Mongoose is running too :)')
}