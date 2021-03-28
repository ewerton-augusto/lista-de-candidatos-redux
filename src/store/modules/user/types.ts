export interface IUser{
    id?: number;
    name: string;
    email: string;
    age: string;
    avatar: string;
}

export interface IGlobalState{
    users: IUser[]
}
