const isAllowed = (req,res,next)=> {
     
    console.log(req.user.user.isAdmin)
    if(req.user.user.isAdmin) {
    next()
    }
    else{
        res.redirect('/index')
    }
}




export default isAllowed