const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
//Load  config file
dotenv.config({ path: './config/config.env'});
//Db connection
const dbConn = require('./config/db/db');
dbConn.connectDB();
dbConn.pool;
 

// require the routes
const index = require('./routes');
const comment = require('./api/comment');
const review = require('./api/review');
const user = require('./api/user');



const app = express(); //creates an instance of an express app

//Ejs template engine 

app.set('view engine', 'ejs'); //express automatically searches for ejs files in views folders

//listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => { 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
}); //returns an instance of the server which can be stored in a constant for later use eg for web sockets


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')); //option indicates the log format to use
}


// Setup the routes
// app.use('/api/', index);
// app.use('/api/', review);
// app.use('/api/', comment);
// app.use('/api/', user);
//Routes
app.use('/api/review', review)
app.use('/api/comment', comment)
app.use('/api/user', user)
app.use('/api', index)