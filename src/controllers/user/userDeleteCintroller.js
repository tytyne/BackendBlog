import{User} from '../../models/user.js'

class userDeleteController{

 
static async deleteById(req,res){
    const user = await User.findById(req.params.id)
    if(!user) res.status(404).json({message:"there is no user with that ID "})
     await user.remove()
    res.status(200).json({message:"the user have been removed"})

}

}

export default userDeleteController