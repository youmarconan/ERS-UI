export class UserResponse {

    constructor(
        public id:string,
        public username:string,
        public email:string,
        public firstName:string,
        public lastName:string,
        public active:boolean,
        public roleName:string
    ) { }
    
}
