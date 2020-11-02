import{Article} from '../../models/article.js'

class articleViewController{

static async viewAll(req,res){
    const articles= await Article.find()

    try{
        if(articles) 
        res.status(200).json(articles)
    }
    catch(err){
        res.status(400).json({message:"there is no article shown"})
    }

}
 
static async viewById(req,res){
    const article = await Article.findById(req.params.id)
    if(!article) res.status(400).json({message:"there is no article with that ID "})
    res.status(200).json(article)

}

}

export default articleViewController