const jwt = require('jsonwebtoken');
const SECRET_KEY = '4@#$5234asd';

module.exports = {
    issue(options){
        let {payload, expiresIn} = options;
        return jwt.sign(payload,SECRET_KEY,{
            expiresIn: expiresIn
        });
    }
}