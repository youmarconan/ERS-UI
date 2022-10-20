import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateReimbRequest } from 'src/app/models/update-reimb-request';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

@Component({
  selector: 'app-update-reimb',
  templateUrl: './update-reimb.component.html',
  styleUrls: ['./update-reimb.component.css']
})
export class UpdateReimbComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router: Router) { }

  ngOnInit(): void {
 
  }

  form : UpdateReimbRequest = {
    reimbursementId: this.rs.reimbId,
    amount: '',
    description: '',
    type: ''
  }

  btn: boolean = true;

  error : string = ''  


  update(){
    console.log(this.form)
    this.rs.updateReimb(this.form).subscribe(

      (data:any) => {
        console.log(data)
        this.router.navigate(['myReimb'])
      },
      Error =>{
        this.error = Error.error.message
        console.log(Error)
      }
      
      )

      this.btn = false;

      this.form = {
        reimbursementId: '',
        amount: '',
        description: '',
        type: ''
      }

  }

  return() {
    this.router.navigate(['myReimb'])
  }

}
