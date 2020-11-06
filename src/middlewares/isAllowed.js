const isAllowed = (req,res,next)=> {
     
    console.log(req.user.user.isAdmin)
    if(req.user.user.isAdmin) {
    next()
    }
    else{
        res.redirect('/notallowed')
    }
}




export default isAllowed