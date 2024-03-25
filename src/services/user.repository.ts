import createRepository from '@services/createServices';
import { SERVER_DOMAIN } from 'data/config';
import { IUser } from 'types/auth.type';

const USER_URL = `${SERVER_DOMAIN}/user`;

const UserRepository = createRepository({
    getUserInfo: (fetch) => fetch<IUser>(`${USER_URL}/me`, { method: 'GET' }),
    logout: (fetch) => fetch(`${USER_URL}/logout`),
});

export default UserRepository;
