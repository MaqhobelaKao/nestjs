import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{

    constructor() {}

    login() {
        return { message: 'User logged in' };
    }

    signUp() {
        return { message: 'User regstered successfully' };
    }
}