import { UserRequest } from './../../models/user-request';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {

  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.user
    this.btn
  }

  btn: boolean = true;
  id : any ;


  register(){
    this.us.register(this.user).subscribe(

      (data:any) => {
        this.id = data; 
        console.log(data)
      })

      this.btn = false;

      this.user = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        isActive: true,
        userRoleName: ''
      }

  }

  user: UserRequest = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    isActive: false,
    userRoleName: ''
  }

  return() {
    this.router.navigate(['admin'])
  }

}
