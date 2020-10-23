import mongoose from 'mongoose'
const{ObjectId}=mongoose.Schema.Types 

export const Article=mongoose.model('Article',new mongoose.Schema({


    header:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    img:{
        data:Buffer,
        contentType:String
    },
    category:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    owner:{
        type:ObjectId,
        ref:'User'
        
    }
}))