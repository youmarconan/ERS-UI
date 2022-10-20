import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.css']
})
export class WelcomeEmployeeComponent implements OnInit {

  constructor(private as:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.firstName
  }

  firstName:string = this.as.user.firstName;

  goToGetMyReimb(){
    this.router.navigate(['myReimb'])
  }

  goToCreateReimb(){
    this.router.navigate(['newReimb'])
  }

  goToUpdateReimb(){
    this.router.navigate(['reimb'])
  }

  logout(){
    this.as.logout
    this.router.navigate([''])
  }

}
