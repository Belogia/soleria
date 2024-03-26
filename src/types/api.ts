export interface IUser {
    id: string;
    avatar: string;
    username: string;
    guilds: Array<{id: string, name: string}>;
}