const mongoose = require("mongoose");
const validator = require("validator")

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid')
            }
        }
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    age:{
        type:Number,
        required:true,
        max:100
    },

})

const User = new mongoose.model('User', UserSchema)
module.exports = User