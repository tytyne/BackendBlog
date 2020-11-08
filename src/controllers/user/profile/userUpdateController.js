import{User} from '../../../models/user.js'

class update{

    static async edit(req,res){
        const user = await User.findById({id:req.params.id})
    }
}

export  default update