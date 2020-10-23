import{Query} from '../../models/query.js'

class queryViewController{

static async viewAll(req,res){
    const queries= await Query.find()

    try{
        if(queries) 
        res.status(200).json(queries)
    }
    catch(err){
        res.status(400).json({message:"there is no query shown"})
    }

}
 
static async viewById(req,res){
    const query = await Query.findById(req.params.id)
    if(!query) res.status(400).json({message:"there is no quey with that ID "})
    res.status(200).json(query)

}

}

export default queryViewController