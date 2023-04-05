import {IUserRepository, User} from '../index';


export class UserRepository implements IUserRepository {
    public async findById(id: string): Promise<User | null> {
        return new User(id, 'John', 'Doe', 'test@gmail.fr', 'password');
    }

    public async findByEmail(email: string): Promise<User | null> {
        if (email === 'test@gmail.fr') {
            return new User('1', 'John', 'Doe', email, 'password');
        }

        else return null;
    }

}


