//const { listBooks } = require('./books');

exports.home = async function(req, res) {
  
  try {
    console.log("Review Home Route reached");
    res.statusCode = 200;
    res.end();
  } catch(e) {
    console.log(e.message)
    res.status(500).send({ error: 'An error occured' });
  }
}

exports.postReview = async (req, res) => {
    try {
        
        if(!req.isAuthenticated()){
            //set dynamic user
        }
        
    } catch (error) {
        
    }
}
module.exports = exports;