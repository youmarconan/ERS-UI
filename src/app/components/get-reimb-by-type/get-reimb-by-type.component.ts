import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}
