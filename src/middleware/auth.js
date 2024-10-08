const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer','').trim();
        const decoded = jwt.verify(token, 'devToken');
        const user = await User.findOne({_id: decoded._id, 'tokens.token' : token});
        res.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({'error' : 'Please Authentication'});
    }
}


module.exports = auth;