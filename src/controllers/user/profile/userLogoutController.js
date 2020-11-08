
const logoutUser = async(req, res) =>{
        req.logout();
        res.redirect('/')
    }

export default logoutUser