const express = require('express');

//Routes
var router = express.Router();
router.get('/', async (req, res) => {
    try {
       console.log("App index Route Hit");
       res.end("200");

    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
    
})


module.exports = router;
