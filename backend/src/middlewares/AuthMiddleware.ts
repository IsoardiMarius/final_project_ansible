import { Request, Response, NextFunction } from 'express';
import JwtTokenVerifier from '../modules/Token/JwtTokenVerifier';

interface IRequestWithAuth extends Request {
    auth: {
        userId: string;
        ip: string;
    };
}

class AuthMiddleware {
    private readonly tokenVerifier: JwtTokenVerifier;

    constructor() {
        this.tokenVerifier = new JwtTokenVerifier();
    }

    public async authenticate(request: IRequestWithAuth, response: Response, next: NextFunction): Promise<void> {
        request.auth = {
            userId: '',
            ip: request.ip,
        };
        try {
            const authorizationHeader = request.headers.authorization;

            if (!authorizationHeader) {
                response.status(401).json({ message: 'Missing Authorization header' });
                return;
            }

            const accessToken = authorizationHeader.split(' ')[1];
            const decodedToken = this.tokenVerifier.verifyToken(accessToken, process.env.JWT_ACCES_SECRET);

            if (!decodedToken) {
                response.status(401).json({ message: 'Invalid token' });
                return;
            }

            request.auth.userId = decodedToken.userId;

            next();
        } catch (error) {
            response.status(401).json({ message: `Unauthorized : ${error.message}` });
            console.log(error);
        }
    }
}

export default AuthMiddleware;
