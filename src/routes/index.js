import express from 'express'
import userRegisterController from '../controllers/user/auth/userRegisterController.js'
import userAuthController from '../controllers/user/auth/userAuthController.js'
import queryCreateController from '../controllers/query/queryCreateController.js'
import queryViewController from '../controllers/query/queryViewController.js'
import userViewController from '../controllers/user/userViewController.js'
import auth from '../middlewares/auth.js'
import isAdmin from '../middlewares/admin.js'
import {validateQuery,validateArticle,validateRegister,validateLogin} from '../middlewares/validatorMiddleware.js'


var router = express.Router()

router.post('/register',validateRegister,userRegisterController.postUser)
router.post('/register/admin',auth,validateRegister,userRegisterController.postAdmin)
router.get('/users',auth,isAdmin,userViewController.viewAll)
router.get('/user/:id',auth,userViewController.viewById)
router.post('/auth',validateLogin,userAuthController.loginUser)
router.post('/post/query',validateQuery,queryCreateController.post)
router.get('/queries',[auth],queryViewController.viewAll)
router.get('/query/:id',auth,queryViewController.viewById)


export default router