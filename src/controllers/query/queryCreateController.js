import {Query} from '../../models/query.js'

class queryCreateController{

static async post(req,res){
   
    const query= new Query({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    })
    await query.save()
    console.log(query)
    res.status(201).json({query})

}

}

export default queryCreateController