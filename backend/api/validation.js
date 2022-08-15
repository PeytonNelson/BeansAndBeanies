//Validation
const Joi = require('joi');

const newUserValidate = (data) => {
    const schema = Joi.object ({
        name: Joi.string().min(8).required(),
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required()
    });

    return schema.validate(data);
};

const loginValidate = (data) => {
    const schema = Joi.object ({
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required()
    });

    return schema.validate(data);
};


module.exports.newUserValidate = newUserValidate;
module.exports.loginValidate = loginValidate;