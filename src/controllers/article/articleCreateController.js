import {Article} from '../../models/article.js'



class articleController{

static async post(req,res){
    // const person=req.body.user
    // const author = person.user.name
    // let owner = person.user.id
    const article= new Article({
        header:req.body.header,
        content:req.body.content,
        category:req.body.category,
        tag:req.body.tag,
      
    })
    // article.owner=owner
    // article.author=author
    await article.save()

    res.status(201).json({article})

}




}

export default articleController