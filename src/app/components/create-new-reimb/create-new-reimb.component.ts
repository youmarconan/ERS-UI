import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbRequest } from 'src/app/models/reimb-request';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

@Component({
  selector: 'app-create-new-reimb',
  templateUrl: './create-new-reimb.component.html',
  styleUrls: ['./create-new-reimb.component.css']
})
export class CreateNewReimbComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router: Router) { }

  ngOnInit(): void {
    this.form
    this.btn
  }

  
  form : ReimbRequest = {
    amount: '',
    description: '',
    type: ''
  }

  btn: boolean = true;
  btnn: boolean = true;
  id : any ;

  error : string = ''  


  createReimb(){
    this.rs.createReimb(this.form).subscribe(

      (data:any) => {
        this.id = data.generatedString; 
        console.log(data)
        this.btnn = true
      },
      Error =>{
        this.error = Error.error.message
        console.log(Error)
        this.btnn = false
      }
      
      )

      this.btn = false;

      this.form = {
        amount: '',
        description: '',
        type: ''
      }

  }

  return() {
    this.router.navigate(['employee'])
  }
}
