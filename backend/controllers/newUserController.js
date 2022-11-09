const User = require('../models/User');
const bcrypt = require('bcrypt');
const newUserValidate = require('../api/validation');

 const evaluateNewUser = async (req, res) => {

    //Validate New User Data
    const {error} = newUserValidate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //Check if User already exists
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) {
        return res.status(400).send('Email already exists');
    }

    try {
        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Add the New User after Validation
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        res.status(201).json({'success': 'Your account has been created'});
    } catch (error) {
        res.status(400).send(error);
    }

 }
 

  module.exports = {evaluateNewUser};