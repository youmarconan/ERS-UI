export class UserRequest {

    constructor(
        public username: string,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public isActive: boolean,
        public userRoleName: string
    ) { }

}
