export interface IUser{
    id: string;
    name: string;
    email: string;
    age: number;
    avatar: string;
}

export interface IGlobalState{
    users: IUser[]
}
