import {UserRepository, UserService} from "../src/modules/User";


const user_exemple = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@gmail.fr',
    password: 'password'
}

describe('UserService', () => {
    it('should return user', async () => {
        const userService = new UserService(new UserRepository());
        const user = await userService.getUserById('1');

        expect(user).toEqual(user_exemple);
    });
});

describe('UserRepository', () => {
    it('should return user', async () => {

        const userRepository = new UserRepository();
        const user = await userRepository.findById('1');

        expect(user).toEqual(user_exemple);
    });
});

describe('UserController', () => {
    it('should return user', async () => {
        const userService = new UserService(new UserRepository());
        const user = await userService.getUserById('1');

        expect(user).toEqual(user_exemple);
    });
});

describe('UserRoute', () => {
    it('should return user', async () => {
        const userService = new UserService(new UserRepository());
        const user = await userService.getUserByEmail('test@gmail.fr');

        expect(user).toEqual(user_exemple);
    });
});

describe('UserRoute', () => {
    it('should return null', async () => {
        const userService = new UserService(new UserRepository());
        const user = await userService.getUserByEmail('tet@gmail.fr');

        expect(user).toEqual(null);
    });
});

// // test route user by id with supertest
// describe('GET /users/:id', () => {
//     it('should return user', async () => {
//         const response = await request(app).get('/users/1');
//
//         expect(response.status).toBe(200);
//         expect(response.body).toEqual(user_exemple);
//     });
// });






