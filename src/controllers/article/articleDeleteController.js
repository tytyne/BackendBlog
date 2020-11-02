
import{Article} from '../../models/article.js'

class articleDeleteController{

static async deleteById(req,res){
    const article = await Article.findById(req.params.id)
    if(!article) res.status(400).json({message:"there is no article with that ID "})
    await article.remove()
    res.status(200).json({message:"the article has been removed"})

}

}

export default articleDeleteController