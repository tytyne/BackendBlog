import {Article} from '../models/article.js'



class articleController{

static async post(req,res){

    const user= auth.getUser()
   
    const article= new Article({
        header:req.body.header,
        content:req.body.content,
        category:req.body.category,
        tag:req.body.tag
    })
    await article.save()

    res.status(201).json({article})

}




}

export default articleController