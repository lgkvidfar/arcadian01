export type IBasicUser = {
    id: string;
    name: string;
    username: string;
    password?: string;
    email: string;
    alive: boolean;
    admin?: boolean;
    seller?: boolean;
    buyer?: boolean;
};

export type ICurrentUser = {
    user: IBasicUser;
    notification?: string;
};

export type IUserState = {
    users: IBasicUser[];
    count: number;
    current?: ICurrentUser;
};

export type ILoggedUser = {
    name: string;
    username: string;
    email: string;
    id: string;
    token: string;
    alive: boolean;
    admin: boolean;
    seller: boolean;
    buyer: boolean;
    message: string;
};

export type ILoginCredentials = {
    username: string;
    password: string;
};
