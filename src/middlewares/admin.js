class admin{

    async isAdmin(req,res,next){
        if(!req.user.isAdmin) res.status(403).send('Access denied')
        next()
    }


}

export default admin