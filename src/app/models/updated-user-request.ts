export class UpdatedUserRequest {

    constructor(
        public userId:string,
        public username:string,
        public email:string,
        public password:string,
        public firstName:string,
        public lastName:string,
        public isActive:string,
        public userRoleName:string
    ) { }

}