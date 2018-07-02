const jwt = require('jsonwebtoken');
const SECRET_KEY = '4@#$5234asd';
const User = require('../modules/user/user.model');

module.exports = {
    issue(options){
        let {payload, expiresIn} = options;
        return jwt.sign(payload,SECRET_KEY,{
            expiresIn: expiresIn
        });
    },
    validate(decodedToken, request,callback) {
        User.findOne({
            _id: decodedToken.id,
            email: decodedToken.email
        },(err, _user)=> {
            if(err || !_user){
                return callback(null,false);
            }
            return callback(null,true);
        });
    }
}