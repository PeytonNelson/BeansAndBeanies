const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {loginValidate} = require('../api/validation');

const evaluateLogin = async (req, res) => {

    const {error} = loginValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if Email Exists
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send('Email or password is wrong');
    }
    //Check if Password is Correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid Password');

    //Create and Assign Tokens
    const accessToken = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
    const refreshToken = jwt.sign({_id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'});
    
    // Save refresh token to user and store as cookie
    user.refreshToken = refreshToken;
    const tokenSaved = await user.save();
    console.log(tokenSaved);
    res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24*60*60*1000})


    res.redirect('/');
    // res.send('Login Successful');
}

module.exports = {evaluateLogin};