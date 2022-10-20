export class UpdateReimbRequest {

    constructor(
        public reimbursementId: string,
        public amount: string,
        public description: string,
        public type: string,
    ) { }

}
