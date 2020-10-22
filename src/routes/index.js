import express from 'express'
import Register from '../controllers/register.js'
var router = express.Router()

router.post('/register',Register.postUser)
router.post('/auth',Register.loginUser)


export default router