import {IUserRepository, User} from '../index';
import db from '../../../config/database';

export class UserRepository implements IUserRepository {

    public async findById(id: string): Promise<User | null> {
        try {
            const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
            return user[0];
        }
        catch (e) {
            console.log(e.message);
            return null;
        }
    }

}


