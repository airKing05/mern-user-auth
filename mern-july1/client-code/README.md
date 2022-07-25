# MERN USER AUTH App 

mern-user-auth App is built with latest development tools.



 - ReactJs is use to develop the ui part.
 - Fully responsive web page.
 - JSON data get from **MongoDb Atlas**.
 - Bootstrap is use to enhance it.

This MERN app works across all devices.

# Some feature 
 - This is APP follow functional base react architecture.
 - This is **User Authentication** application.
 - User Schema to providing the object based Data structure to store the user information.
 
 ## Initial Authentication

 - While SignUp it will authorize your email and number
 - you can not enter any thing in email input box, it should be proper email id
 - same for the mobile number

 ## secondary Authentication

 - you can not sign in with out sign up.
 - you have to enter you email and password that you used while sign up 

 ## Tertiary Authentication
 - you can not go to about page & contact 
 - About page is store each user information, so you can check your profile only.
 - **JSON-WEB-TOKEN** is use to store user information into **cookies**.
 - it will generated JWT-Token while user sign-up, and store along with user information.
 - validate for 30 days.


 ## Security 
 - This web page is filly secure.
 - Hacker can not access your ID and password easily
 - Password is provide here by the **bcrypt** library.
 


 # Some Ui feature 

 - You can sign-up here with your basic information.
 - Can you can get you information in **about**.
 - If you have any issues or suggestion related to the web-page, so can interact with us through **contact page**
 


## Screenshots
#### Sign Up Page

- Enter you basic information

![App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%204.44.43%20PM.png?raw=true)

- If no Error occur

[App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%204.49.27%20PM.png?raw=true)

- Enter Your Email and Password

![App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%204.51.11%20PM.png?raw=true)

#### Mobile Views

- If Email and Password and correct

![App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%204.57.02%20PM.png?raw=true)

- If Sign In successfully will redirect to home

![App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%204.58.30%20PM.png?raw=true)

#### Full size

- If you are a True User

![App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%205.01.40%20PM.png?raw=true)

- contact for quarry or suggestion

![App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%205.03.28%20PM.png?raw=true)

- Write your quarry in quarry section
![App Screenshot](https://github.com/airKing05/mern-user-auth/blob/auth/mern-july1/client-code/screeShot/Screenshot%202022-07-25%20at%205.04.46%20PM.png?raw=true)




## API Reference

#### Get all items
API in MongoDB Atlas

Get Api from  http://localhost:5000/user


user api data look like
```bash
        _id: 62de7c0a3d19f9ac1c348d9a
        name: "iron man"
        email: "iroxxxxx3@gmail.com"
        phone: 98*******0
        work: "web developer"
        password: "$2b$12$DPnjBcIs8yrR3QRNoK.R5eN8HMrTIoGGGjQIomHFWzyEpSf6AZ43u"
        cpassword: "$2b$12$WkpOKe/R.WDXcViezpi/b.Z8Tft4knooYqrUKVXX/mXmqpae/ivyy"
        tokens: Array
        __v:0

```



## Tech Stack

**Client:** React, BootStrap, CSS

**Server:** NodeJs, ExpressJs

**DataBase:** MongoDB Atlas


## Installation

GitHub Repository of MERN USER AUTH App
```bash
https://github.com/airKing05/mern-user-auth.git
```

Install my-project with npm
```bash
  npm install my-project
  cd my-project
```

### Database

To store the data connect the application with MongoDb Atlas 

- create account in mongoDb Atlas.
- create cluster 
- Go to **server>db>conn.js**
- add your cluster/ collection information into url, like your password and collection name
- also add port number to- **server>app.js**, line number **listion()** function 
- or you can create your **config.env** file
