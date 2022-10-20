import { ReimbursementResponse } from './../../models/reimbursement-response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/services/reimbursement-service';
import { ApproveOrDenyReimbForm } from 'src/app/models/approve-or-deny-reimb-form';

@Component({
  selector: 'app-get-reimb-by-id',
  templateUrl: './get-reimb-by-id.component.html',
  styleUrls: ['./get-reimb-by-id.component.css']
})
export class GetReimbByIdComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router:Router) { }

  ngOnInit(): void {
  }

  id : string = "";
  btn : boolean = false;

  getReimbById(){
    this.rs.getReimbById(this.id).subscribe(

      (data:any) => {
        this.reimb = data; 
        console.log(this.reimb)
      }
    )
    this.btn = true;
  }

  reimb : ReimbursementResponse = {
    id: '',
    amount: 0,
    submitted: '',
    resolved: '',
    description: '',
    authorId: '',
    resolverId: '',
    typeNmae: '',
    statusName: ''
  } ;

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



