const express = require("express");
const app = express(); 

const router = express.Router(); 

router.param('user', function(req, res, next) { 
    // if ":user" placeholder in any of the router's route definitions 
    // it will be intercepted by this middleware 
    const user = { id: 1, name: 'sahil' }; 
    req.user = user; 
    next();
}); 

router.get("/:user", function(req, res) { 
    // req.user will be populated with { id: 1, name: 'Mirko' } 
    return res.json({ result: req.user });
}); 

app.use("/api/users", router); app.listen(3000);
