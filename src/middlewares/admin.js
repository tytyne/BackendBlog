

    const isAdmin = (req,res,next)=> {
     
        console.log(req.user.user.isAdmin)
        if(!req.user.user.isAdmin) 
        return res.status(403).send('Access denied')
        
        next()
    }




export default isAdmin