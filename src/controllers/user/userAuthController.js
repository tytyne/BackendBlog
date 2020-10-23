import {User} from '../../models/user.js'
import bcrypt from 'bcrypt'
import _  from 'lodash'
import jwt from 'jsonwebtoken'
import config from 'config'


class authController{

static async loginUser(req,res){

    // check if the user already exists
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(404).send('The email does not exist')
    }
    else{
        const validPassword=await bcrypt.compare(req.body.password,user.password)
        if(!validPassword) 
        return res.status(400).send('Incorrect email or password')
    }
    const token=jwt.sign({_id:user._id},config.get('PrivateKey'))
    res.header('x-auth-token',token).send(_.pick(user,['id','name','email']))
  
}

}
export default authController

