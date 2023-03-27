const express = require('express');
const userRoutes = express.Router();
// or ES6
//import { Router as commentRoutes } from 'express';

// Handlers
const userHandlers = require('./user.handlers');

// list all books
 
userRoutes.get('/', (req, res) => {
    console.log("User Home Route reached");
    res.statusCode = 200;
    res.end();
  });

// export userRoutes 
module.exports = userRoutes; 
// or ES6
 //export default userRoutes;