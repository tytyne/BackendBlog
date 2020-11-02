import{Query} from '../../models/query.js'

class queryDeleteController{

static async deleteById(req,res){
    const query = await Query.findById(req.params.id)
    if(!query) res.status(400).json({message:"there is no quey with that ID "})
    await query.remove()
    res.status(200).json({message:"the query has been removed"})

}

}

export default queryDeleteController