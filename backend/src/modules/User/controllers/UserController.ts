import { Request, Response } from 'express';
import { UserService } from '../index';

export class UserController {

    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        const user = await this.userService.getUserById(userId);

        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        res.status(200).json(user);
    }

    async getUserByEmail(req: Request, res: Response): Promise<void> {
        const { email } = req.params;
        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        res.status(200).json(user);
    }
}
