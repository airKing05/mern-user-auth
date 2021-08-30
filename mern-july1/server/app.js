const express = require('express');
const dotenv = require('dotenv');

// const User = require('./models/userSchema');

const app = express();




// .env file, to hide persnol info - port number, and database id Password
dotenv.config({path: './config.env'});
const PORT = process.env.PORT


// connecting database / mongodb
require('./db/conn');
require('./models/userSchema');

// middleware to understood json formate data to our application
app.use(express.json());

// middleware to restrict partcular file for authetication
// const middleware = (req, res, next)=>{
//     console.log('this is middleware');
//     next();
// }

// linking router file 
app.use(require('./router/auth'))

// app.get('/', (req, res)=>{
//     res.send(`hellow world from serever side`)
// })

// app.get('/about', middleware, (req, res)=>{
//     res.send(`hellow world from in abnout  side`)
//     console.log('this is middleware in about');
    
// })

app.get('/contact', (req, res)=>{
    res.send(`hellow world from contactus side`)
    res.cookie("jwt", "contact token")
})



// listening port
app.listen(PORT, ()=>{
    console.log(`server is running on port number ${PORT}`)
})