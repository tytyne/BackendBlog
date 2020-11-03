import express from 'express'
import userRegisterController from '../controllers/user/auth/userRegisterController.js'
import userAuthController from '../controllers/user/auth/userAuthController.js'
import queryCreateController from '../controllers/query/queryCreateController.js'
import queryViewController from '../controllers/query/queryViewController.js'
import queryDeleteController from '../controllers/query/queryDeleteController.js'
import userDeleteController from '../controllers/user/userDeleteController.js'

import userViewController from '../controllers/user/userViewController.js'
import articleCreateController from '../controllers/article/articleCreateController.js'
import articleViewController from '../controllers/article/articleViewController.js'
import articleDeleteController from '../controllers/article/articleDeleteController.js'
import auth from '../middlewares/auth.js'
import isAdmin from '../middlewares/admin.js'
import { validateQuery,validateArticle,validateRegister,validateLogin} from '../middlewares/validatorMiddleware.js'


var router = express.Router()

router.post('/register',validateRegister,userRegisterController.postUser)
router.post('/register/admin',[auth,isAdmin],validateRegister,userRegisterController.postAdmin)
router.post('/auth',validateLogin,userAuthController.loginUser)
router.get('/users',userViewController.viewAll)

router.get('/user/:id',auth,userViewController.viewById)

router.post('/post/query',validateQuery,queryCreateController.post) //done
router.get('/queries',queryViewController.viewAll)
router.get('/articles',articleViewController.viewAll) //done
router.get('/query/:id',auth,queryViewController.viewById)
router.delete('/query/:id',queryDeleteController.deleteById)
router.delete('/user/:id',userDeleteController.deleteById)
router.delete('/article/:id',articleDeleteController.deleteById)
router.post('/post/article',validateArticle,articleCreateController.post)


export default router