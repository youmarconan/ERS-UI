import { ReimbursementResponse } from './../../models/reimbursement-response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

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

}
