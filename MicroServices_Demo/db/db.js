const mongoose = require('mongoose');
const MONGO_URI = "mongodb://127.0.0.1:27017/MICROSERVICES_DEMO";
mongoose.connect(MONGO_URI, {
 
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true
}).then(() => {
     console.log('Connection successful!');
}).catch((e) => {
     console.log('Connection failed!');
})