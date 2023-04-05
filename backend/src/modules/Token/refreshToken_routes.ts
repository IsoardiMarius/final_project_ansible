import {generateAccessToken, generateRefreshToken} from "./TokenService";

const express = require('express');
const router = express.Router();

router.post('/refresh_token', (req, res) => {
    const refresh_token = req.header('refresh_token')
    if (!refresh_token) return res.status(401).json({message: 'Unauthorized'});
    const user = {
        id: req.body.id,
        ip: req.ip,
    }
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    res.json({newAccessToken, newRefreshToken});
})

module.exports = router;

export {}
