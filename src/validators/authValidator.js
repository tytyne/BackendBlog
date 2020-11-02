
import Joi from 'joi'

const loginForm=Joi.object({                                                                                                                                
    email:Joi.string().min(5).email().required(),
    password:Joi.string().min(5).required()
})

export default loginForm