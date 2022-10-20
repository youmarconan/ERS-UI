import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApproveOrDenyReimbForm } from 'src/app/models/approve-or-deny-reimb-form';
import { ReimbursementResponse } from 'src/app/models/reimbursement-response';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

@Component({
  selector: 'app-get-reimb-by-type',
  templateUrl: './get-reimb-by-type.component.html',
  styleUrls: ['./get-reimb-by-type.component.css']
})
export class GetReimbByTypeComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router:Router) { }

  ngOnInit(): void {
  }

  type : string = "";
  btn : boolean = false;

  getReimbByType(){
    this.rs.getReimbByType(this.type).subscribe(

      (data:any) => {
        this.reimbs = data; 
        console.log(this.reimbs)
      }
    )
    this.btn = true;
  }

  reimbs : ReimbursementResponse[] = [] ;

  return(){
    this.router.navigate(['manager'])
  }

  
  form : ApproveOrDenyReimbForm = {
    statusName: '',
    reimbursementId: ''
  }

  response : any ;

  approve(reimbId : string){

    this.form.statusName='approve'
    this.form.reimbursementId= reimbId

    console.log(this.form)

    this.rs.approveOrDeny(this.form).subscribe(

      (data:any) => {
        this.response = data; 
        console.log(data)
      })

      console.log(this.response)

      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['allReimb']);
    }); 
      // this.router.navigate(['allReimb'])

  }

  deny(reimbId : string){

    this.form.statusName='deny'
    this.form.reimbursementId= reimbId

    this.rs.approveOrDeny(this.form).subscribe(

      (data:any) => {
        this.response = data; 
        console.log(data)
      })

      console.log(this.response)

      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['allReimb']);
    }); 

     // this.router.navigate(['allReimb'])

  }

  display (status: string): boolean {

    if (status == "pending"){
      return true
    }else{
      return false
    }
  }

}
