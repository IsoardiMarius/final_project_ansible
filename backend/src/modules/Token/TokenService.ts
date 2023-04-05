const jwt = require('jsonwebtoken');
require('dotenv').config();

export const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
}
export const generateAccessToken = (new_payload) => {
    return  jwt.sign(new_payload, process.env.JWT_ACCES_SECRET, {expiresIn: '1m'})
}

export const generateRefreshToken = (new_payload) => {
    return jwt.sign(new_payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '1y'});
}

