import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementResponse } from 'src/app/models/reimbursement-response';
import { ReimbursementService } from 'src/app/services/reimbursement-service';

@Component({
  selector: 'app-view-my-reimb',
  templateUrl: './view-my-reimb.component.html',
  styleUrls: ['./view-my-reimb.component.css']
})
export class ViewMyReimbComponent implements OnInit {

  constructor(private rs:ReimbursementService, private router:Router) { }

  ngOnInit(): void {
    this.getMyReimb()
  }

  getMyReimb(){
    this.rs.getMyReimbs().subscribe(

      (data:any) => {
        console.log(data)
        this.reimbs = data; 
        console.log(this.reimbs)
      }
    )
  }

  update(id : string){
    this.rs.reimbId = id
    this.router.navigate(['reimb'])
  }

  
  reimbs : ReimbursementResponse[] =[];

  return(){
    this.router.navigate(['employee'])
  }

  display (status: string): boolean {

    if (status == "pending"){
      return true
    }else{
      return false
    }
  }

}
