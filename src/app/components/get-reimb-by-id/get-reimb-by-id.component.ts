import { ReimbursementResponse } from './../../models/reimbursement-response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

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

}
