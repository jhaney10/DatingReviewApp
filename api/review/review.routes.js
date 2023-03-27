const express = require('express');
const reviewRoutes = express.Router();
// or ES6
//import { Router as commentRoutes } from 'express';

// Handlers
const reviewHandlers = require('./review.handlers');

// list all books
 
reviewRoutes.get('/', reviewHandlers.home);

// export reviewRoutes 
module.exports = reviewRoutes; 
// or ES6
 //export default reviewRoutes;