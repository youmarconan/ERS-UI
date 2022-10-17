import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor(private as:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.firstName
  }

  firstName:string = this.as.user.firstName;

  goToGetALLUsers(){
    this.router.navigate(['allUsers'])
  }

  goToGetGetUserById(){
    this.router.navigate(['userId'])
  }

  goToGetGetUserByUsername(){
    this.router.navigate(['username'])
  }

  goToGetGetUserByEmial(){
    this.router.navigate(['userEmail'])
  }

  goToRegisterNewUSer(){
    this.router.navigate(['newUser'])
  }

  goToUpdateUSer(){
    this.router.navigate(['user'])
  }

  logout(){
    this.as.logout
    this.router.navigate([''])
  }

}
