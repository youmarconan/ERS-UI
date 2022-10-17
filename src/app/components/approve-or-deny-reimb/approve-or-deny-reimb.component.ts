import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApproveOrDenyReimbForm } from 'src/app/models/approve-or-deny-reimb-form';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

@Component({
  selector: 'app-approve-or-deny-reimb',
  templateUrl: './approve-or-deny-reimb.component.html',
  styleUrls: ['./approve-or-deny-reimb.component.css']
})
export class ApproveOrDenyReimbComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router:Router) { }

  ngOnInit(): void {
    this.btn
    this.form
  }

  btn: boolean = true;
  response : any ;

  form : ApproveOrDenyReimbForm = {
    statusName: '',
    reimbursementId: ''
  }


  click(){
    this.btn = true
    this.form = {
      statusName: '',
      reimbursementId: ''
    }
  }

  approve(){

    this.form.statusName='approve'

    console.log(this.form)

    this.rs.approveOrDeny(this.form).subscribe(

      (data:any) => {
        this.response = data; 
        console.log(data)
      })

      console.log(this.response)

      this.btn = false;

  }

  deny(){

    this.form.statusName='deny'

    this.rs.approveOrDeny(this.form).subscribe(

      (data:any) => {
        this.response = data; 
        console.log(data)
      })

      console.log(this.response)

      this.btn = false;

  }


  return() {
    this.router.navigate(['manager'])
  }


}
