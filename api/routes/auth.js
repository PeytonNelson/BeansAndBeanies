const router = require('express').Router();
const User = require('../../models/User');
const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {newUserValidate, loginValidate} = require('../validation');




router.post('/new', async (req, res) => {

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

    //Hash Password
    const salt = await bcrpyt.genSalt(10);
    const hashedPassword = await bcrpyt.hash(req.body.password, salt);

    //Add the New User after Validation
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
       const savedUser = await user.save(); 
       res.send({user: user._id});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', async (req,res) => {

    const {error} = loginValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if Email Exists
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send('Email or password is wrong');
    }
    //Check if Password is Correct
    const validPassword = await bcrpyt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid Password');

    //Create and Assign Token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '10h'});
    res.header('auth-token', token).send(token);

    // res.send('Login Successful');
})



module.exports = router;