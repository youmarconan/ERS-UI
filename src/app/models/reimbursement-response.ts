export class ReimbursementResponse {

    constructor(
        public id:string,
        public amount:number,
        public submitted:string,
        public resolved:string,
        public description:string,
        public authorId:string,
        public resolverId:string,
        public typeNmae:string,
        public statusName:string
    ) { }

}
