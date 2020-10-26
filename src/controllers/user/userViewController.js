import{User} from '../../models/user.js'

class userViewController{

static async viewAll(req,res){
    const users= await User.find()

    try{
        if(users) 
        res.status(200).json(users)
    }
    catch(err){
        res.status(404).json({message:"there is no user shown"})
    }

}
 
static async viewById(req,res){
    const user = await User.findById(req.params.id)
    if(!user) res.status(404).json({message:"there is no user with that ID "})
    res.status(200).json(user)

}

}

export default userViewController