const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');


const Authenticate = async (req, res, next) =>{
     try{
         const token = req.cookies.jwtoken;
         const verifyToken = jwt.verify(token, process.env.SECRET_KEY);  //verifying token with SECRET_KEY

         const rootUser = await user.findOne({_id: verifyToken._id, "tokens.token": token});

         if(!rootUser){ throw new Error('user not found')}

         req.token = token;
         req.rootUser = rootUser;
         req.userID = rootUser._id;

         nest();


     }
     catch(err){
         res.status(401).send("unauthorized: no token provided")
         console.log(err)
     }
}

module.exports = Authenticate();