const Joi = require('@hapi/joi')

//Register validation 
const registerValidation =(data)=>{
    const schema = {
        username: Joi.string().min(5).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().valid('student', 'instructor', 'admin').required(),
        profile_picture: Joi.string(),
        expertise: Joi.string().when('role', { is: 'instructor', then: Joi.required() }),
        bio: Joi.string().when('role', { is: 'instructor', then: Joi.required() })
    
    }

    return Joi.validate(data,schema)
}

const loginValidation =(data)=>{
    const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().required()
        
        
    
    }

    return Joi.validate(data,schema)
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
