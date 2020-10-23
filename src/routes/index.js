import express from 'express'
import userRegisterController from '../controllers/user/userRegisterController.js'
import userAuthController from '../controllers/user/userAuthController.js'
import queryCreateController from '../controllers/query/queryCreateController.js'
import queryViewController from '../controllers/query/queryViewController.js'
import userViewController from '../controllers/user/userViewController.js'
import auth from '../middlewares/auth.js'
import{auth} from 'auth'
import admin from '../middlewares/admin'
import {isAdmin} from 'admin'

var router = express.Router()

router.post('/register',userRegisterController.postUser)
router.post('/register/admin',userRegisterController.postAdmin)
router.get('/users',userViewController.viewAll)
router.get('/user/:id',userViewController.viewById)
router.post('/auth',userAuthController.loginUser)
router.post('/post/query',queryCreateController.post)
router.get('/queries',queryViewController.viewAll)
router.get('/query/:id',queryViewController.viewById)


export default router