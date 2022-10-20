import { ReimbursementResponse } from './../../models/reimbursement-response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/services/reimbursement-service';
import { ApproveOrDenyReimbForm } from 'src/app/models/approve-or-deny-reimb-form';

@Component({
  selector: 'app-get-all-reimb',
  templateUrl: './get-all-reimb.component.html',
  styleUrls: ['./get-all-reimb.component.css']
})
export class GetAllReimbComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router:Router) { }

  ngOnInit(): void {
    this.getAllReimb()
  }

  getAllReimb(){
    this.rs.getAllReimbs().subscribe(

      (data:any) => {
        console.log(data)
        this.reimbs = data; 
        console.log(this.reimbs)
      }
    )
  }

  reimbs : ReimbursementResponse[] =[];


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

      window.location.reload();
      

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

      window.location.reload();


  }

  display (status: string): boolean {

    if (status == "pending"){
      return true
    }else{
      return false
    }


  }

  

 
  

}
