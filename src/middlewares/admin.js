class admin{

    async isAdmin(req,res,next){
        if(!req.user.isAdmin) res.status(500).send('Access denied')
        next()
    }


}

export default admin