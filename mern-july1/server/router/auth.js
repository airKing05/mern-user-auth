const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("this is request form server side by router auth.js");
});

//  By Promises ...............................................

// router.post('/register', (req, res) => {
//     // console.log(req.body.name)
//     // console.log(req.body.email)

//     // req.send('this is post request')
//     // res.json({message: req.body})

//     // bye es7 we can also write like this way
//     const {name, email, phone, work, password, cpassword} = req.body;

//     // form validation
//     // if user does not fill-up all the data of registration from

//     if (!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error : "please fill-up all the fields"})
//     }

// checking the field data with database, if match than

// User.findOne({email: email})     // email is key of data base : email fill-up data by user
//     .then((userExist) => {
//         if (userExist){
//             return res.status(422).json({err: "this email already exist"})
//         }

//             const user = new User ({name, email, phone, work, password, cpassword})  // it is in key value pair name: name

//             user.save().then(() => {
//             res.status(201).json({message: "user registered successfully"})
//             }).catch((err) => res.status(500).json({err: "unable to registered"}))

//     }).catch(err => {console.log(err)})

// By Async Await ..........................................

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please fill-up all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ err: "this email already exist" });
    } 
    else if (password != cpassword) {
      return res.status(400).json({ err: "password and confirm password not same" });
    } 
    else {
      const user = new User({ name, email, phone, work, password, cpassword });

      // bcrypt function will be call here
      const userRegistered = await user.save();
      if (userRegistered) {
        res.status(201).json({ message: "user registered successfully" });
      } 
      else {
        res.status(500).json({ err: "unable to registered" });
      }
    }

  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
});




// signin rout ..............................................

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ err: "invalid details" });
  }
  try {
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (!userLogin) {
      res.status(400).json({ err: "invalid email" });
    } 
    else {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // jwt token
      const token = await userLogin.generateAuthToken();

      res.cookie("jwttoken", token, {
        expires : new Date(Date.now()+25892000000),          // after 30 days
        httpOnly: true
      });
      
      console.log(token);

      if(!isMatch){
        res.status(400).json({err: 'invalid pass'})
      }
      else{
        res.status(201).json({message:'signin successfully'})
        console.log(userLogin)
      }
     
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
