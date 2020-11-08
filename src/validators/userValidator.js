import Joi from 'joi'

const userForm=Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().min(5).email().required(),
    password:Joi.string().min(5).required()
})

export default userForm