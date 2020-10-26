import Joi from 'joi'

const articleForm=Joi.object({
    
    header:Joi.string().required(),
    content:Joi.string().required(),
    img:Joi.string().required(),
    tag:Joi.string().required(),
    author:Joi.string().required()

})

export default articleForm