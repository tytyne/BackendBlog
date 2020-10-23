import express from 'express'
import userRegisterController from '../controllers/user/userRegisterController.js'
import userAuthController from '../controllers/user/userAuthController.js'
var router = express.Router()

router.post('/register',userRegisterController.postUser)
router.post('/register/admin',userRegisterController.postAdmin)
router.post('/auth',userAuthController.loginUser)


export default router