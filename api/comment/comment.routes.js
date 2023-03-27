const express = require('express');
const commentsRoutes = express.Router();
// or ES6
//import { Router as commentRoutes } from 'express';

// Handlers
const commentHandlers = require('./comment.handlers');

// list all comments
 
commentsRoutes.get('/', (req, res) => {
    console.log("Comment Home Route reached");
    res.statusCode = 200;
    res.end();
  });

// export commentRoutes 
module.exports = commentsRoutes; 
// or ES6
 //export default commentRoutes;