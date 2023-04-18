import { Request, Response } from 'express';
import {User, UserService} from '../index';
import { ERROR_NOT_FOUND } from "../../../helpers/messages";


export class UserController {
    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
        this.getUserById = this.getUserById.bind(this);
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        const user = await this.userService.getUserById(userId);
        console.log(user);
        if (!user) {
            res.status(404).send("User " + ERROR_NOT_FOUND);
            return;
        }
        const new_user = new User(user.id, user.firstname, user.lastname, user.email, user.password);
        res.status(200).json(new_user);
    }
}
