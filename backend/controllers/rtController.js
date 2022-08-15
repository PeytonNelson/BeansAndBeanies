const User = require('../../models/User');
const jwt = require('jsonwebtoken');


const evaluateRefreshToken = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    //Check if Refresh Token Exists
    const user = await User.findOne({refreshToken});
    if (!user) return res.status(403);
    
    //Verify Token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err | user._id !== decoded._id) return res.sendStatus(403);

        const accessToken = jwt.sign({_id: decoded._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
        
        res.json(accessToken);
    })
}

module.exports = {evaluateRefreshToken};