import jwt from 'jsonwebtoken'
import config from 'config'



    const auth = (req,res,next)=>{

        const token=req.header('x-auth-token');
        if(!token) res.status(403).send('access denied')


        try{

            const decoded=jwt.verify(token,config.get('PrivateKey'))
            req.user=decoded
            next()
        }
        catch(err){
            res.send('Invalid Token')
        }

    }



export default auth