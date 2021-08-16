const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    work: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    cpassword: {
        type: String,
        require: true,
    },
    tokens: [
        {
            token : {
                type: String,
                require: true,
            }
        }
    ]

})


// password hashing

userSchema.pre('save' , async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


// jwt token for auth
userSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id : this._id}, process.env.SECRET_KEY);  // _id(asking unique id) : this._id (taken id from database of corresponding login email)
        this.tokens = this.tokens.concat({token : token})                  // storing jwt token into tokens. token(from userSchema) : token (value from generated token)
        await this.save();
        return token;

    }
    catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;