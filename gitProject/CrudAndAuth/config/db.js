const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.URI;

main().catch((err)=>console.log('Error with database :( ', err));

async function main(){
    await mongoose.connect(URI, {useUnifiedTopology:true, useNewUrlParser:true});
    console.log('Mongo is running ;)');
};
