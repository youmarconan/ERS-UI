import { Credentials } from './../../models/credentials';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  message: string = "Log in"

  credentials: Credentials = {
    username: "",
    password: ""
  }

  error: string =''

  loginFunction() {
    this.as.login(this.credentials).subscribe(
      (data: any) => {
        console.log(data)
        this.as.user = data.body; //the user in the UserService gets populated with the API's userResponse data
        if(this.as.user.roleName == "admin"){
          this.router.navigate(['admin'])
        }
        if(this.as.user.roleName == "manager"){
          this.router.navigate(['manager'])
        }
        if(this.as.user.roleName == "employee"){
          this.router.navigate(['employee'])
        }
        
      }, Error =>{
        this.error = Error.error.message
        console.log(Error)
      }
      

    )

  }

}
