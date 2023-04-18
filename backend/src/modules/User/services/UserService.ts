import {User, IUserRepository} from '../index';

export class UserService {
    private readonly userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async getUserById(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

}
