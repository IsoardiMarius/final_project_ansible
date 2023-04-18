import * as express from 'express';
import { UserController, UserRepository, UserService } from '../index';
import AuthMiddleware from "../../../middlewares/AuthMiddleware";


const authMiddleware = new AuthMiddleware();
export class UserRoute {
    public router = express.Router();
    private userController = new UserController(new UserService(new UserRepository()));

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/:userId', this.userController.getUserById)
        // this.router.get('/:userId', authMiddleware.authenticate.bind(authMiddleware), this.userController.getUserById)
    }
}
