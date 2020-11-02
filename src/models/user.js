import Joi from 'joi'
import mongoose from 'mongoose'
export const User=mongoose.model('User',new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minlength:5,
        maxlength:255
    },
    isAdmin:{
        type:Boolean,
        default:false

    }
}))






