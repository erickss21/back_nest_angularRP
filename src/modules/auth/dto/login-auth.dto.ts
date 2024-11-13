import { User } from "../interfaces/user.interface";

export class loginAuthDto implements User{
    email: string;
    password: string;

}