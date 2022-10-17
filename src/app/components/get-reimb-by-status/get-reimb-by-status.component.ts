import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementResponse } from 'src/app/models/reimbursement-response';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

@Component({
  selector: 'app-get-reimb-by-status',
  templateUrl: './get-reimb-by-status.component.html',
  styleUrls: ['./get-reimb-by-status.component.css']
})
export class GetReimbByStatusComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router:Router) { }

  ngOnInit(): void {
  }

  status : string = "";
  btn : boolean = false;

  getReimbByStatus(){
    this.rs.getReimbByStatus(this.status).subscribe(

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

}
