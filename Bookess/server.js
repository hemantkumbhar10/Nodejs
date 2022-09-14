const express = require('express');
const app = express();
require('dotenv').config();
let cookieSession = require('cookie-session');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    cookieSession({
      name: "bookess.session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true
    })
  );

port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Bookess application." });
});


require('./config/db');
require('./routes/auth.routes')(app);
require('./routes/book.routes')(app);
require('./routes/admin.routes')(app);
require('./routes/userActions.routes')(app);

app.listen(port,()=>{
    console.log(`Yay! Bookess app is running on port : ${port}`);
})