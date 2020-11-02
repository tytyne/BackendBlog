import Joi from 'joi'

const articleForm=Joi.object({
    
    header:Joi.string().required(),
    content:Joi.string().required(),
    img:Joi.string(),
    tag:Joi.string().required(),
    category:Joi.string().required(),
    author:Joi.string()

})

export default articleForm