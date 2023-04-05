const jwt = require('jsonwebtoken');

class JwtTokenVerifier {
  verifyToken(token: string, secret: string): any {
    return jwt.verify(token, secret);
  }
}

export default JwtTokenVerifier;
