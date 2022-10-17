import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome-manager',
  templateUrl: './welcome-manager.component.html',
  styleUrls: ['./welcome-manager.component.css']
})
export class WelcomeManagerComponent implements OnInit {

  constructor(private as:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.firstName
  }

  firstName:string = this.as.user.firstName;

  goToGetALLReimb(){
    this.router.navigate(['allReimb'])
  }

  goToGetReimbById(){
    this.router.navigate(['reimbId'])
  }

  goToGetReimbByStatus(){
    this.router.navigate(['reimbStatus'])
  }

  goToGetReimbByType(){
    this.router.navigate(['reimbType'])
  }

  goToApproveOrDenyReimb(){
    this.router.navigate(['status'])
  }

  logout(){
    this.as.logout
    this.router.navigate([''])
  }

}
