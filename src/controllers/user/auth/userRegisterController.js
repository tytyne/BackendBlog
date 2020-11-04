import {User} from '../../../models/user.js'
import bcrypt from 'bcrypt'
import _  from 'lodash'



class userController{

    static async postUser(req,res){

        // Check if this user already exist 
        let user = await User.findOne({ email: req.body.email });
        console.log(user)
        if (user) {
            return res.status(409).send('That user already exists');
        } else {
            
            user = new User(_.pick(req.body,['name','email','password']))
            const salt=await bcrypt.genSalt(10)
            user.password=await bcrypt.hash(user.password,salt)
            await user.save();
            res.status(201).json({user});
        }


    }
    static async postAdmin(req,res){

        // Check if this user already exist 
        let user = await User.findOne({ email: req.body.email });
        console.log(user)
        if (user) {
            return res.status(409).send('That user already exists');
        } else {
            
            user = new User(_.pick(req.body,['name','email','password']))
            user.isAdmin=true
            const salt=await bcrypt.genSalt(10)
            user.password=await bcrypt.hash(user.password,salt)
            await user.save();
            res.status(201).json({user});
        }


    }

 


}
export default userController;

