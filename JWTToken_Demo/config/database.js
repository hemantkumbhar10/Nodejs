const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;


main().catch((err)=>console.log(err));

async function main(){
  await mongoose.connect(`${uri}`, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Mongo is Running')
}
