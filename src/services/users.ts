import axios from 'axios';
import { SERVER_DOMAIN } from 'data/config';

export const signUp = async ({
    name,
    email,
    password,
}: {
    name: string;
    email: string;
    password: string;
}) => {
    try {
        const { data } = await axios.post(`${SERVER_DOMAIN}api/user/signup`, {
            name,
            email,
            password,
        });

        return data;
    } catch (error) {
        console.error(error);
    }
};

export const login = async ({ email, password }: { email: string; password: string }) => {
    try {
        const { data } = await axios.post(`${SERVER_DOMAIN}api/user/login`, {
            email,
            password,
        });

        return data;
    } catch (error) {
        console.error(error);
    }
};

export const logout = async () => {
    try {
        const { data } = await axios.post(`${SERVER_DOMAIN}api/user/logout`);

        return data;
    } catch (error) {
        console.error(error);
    }
};
