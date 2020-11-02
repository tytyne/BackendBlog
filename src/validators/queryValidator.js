import Joi from 'joi'

const queryForm=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    subject:Joi.string().required(),
    message:Joi.string().required()
})

export default queryForm