export interface IUser {
    name: string;
    _id: string;
    email: string;
}

export interface CustomSession {
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
    user: IUser;
}
