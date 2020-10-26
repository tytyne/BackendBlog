import queryValidator from '../validators/queryValidator.js'
import articleValidator from '../validators/articleValidator.js'
import userValidator from '../validators/userValidator.js'
import authValidator from '../validators/authValidator.js'

export const validateQuery =(req,res,next)=>{

    const{name,email,subject,message}=req.body;
    const vld = queryValidator.validate({
        name,email,subject,message
    })

    if(vld.error){

        return  res.status(400).send(vld.error.details[0].message);
    }
    return next();

}

export const  validateArticle=(reqs,res,next)=>{
    const{header,content,img,category,tag}=req.body;
    const vld = articleValidator.validate({
        header,content,img,category,tag
    })

    if(vld.error){

        return  res.status(400).send(vld.error.details[0].message);
    }
    return next();

}
 export const validateRegister =(req,res,next)=>{
    const{name,email,password}=req.body;
    const vld = userValidator.validate({
        name,email,password
    })

    if(vld.error){

        return  res.status(400).send(vld.error.details[0].message);
    }
    return next();

}

export const validateLogin =(req,res,next)=>{
    const{email,password}=req.body;
    const vld = authValidator.validate({
        email,password
    })

    if(vld.error){

        return  res.status(400).send(vld.error.details[0].message);
    }
    return next();
}
