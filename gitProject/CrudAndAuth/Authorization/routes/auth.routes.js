const express = require("express");

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header("Access-Control_ALlow_Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post('/signup',controller.signup);

  app.post('/signin', controlller.signin);

  app.post('/signout', controller.signout);
  
};
