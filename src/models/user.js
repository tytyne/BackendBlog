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

export const validate=(req)=>{
    const schema = Joi.object({
        name:Joi.string().min(2).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required()
    })
    schema.validate(req);
};





