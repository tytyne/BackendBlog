import mongoose from 'mongoose'


export const Query=mongoose.model('Query',new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
}))