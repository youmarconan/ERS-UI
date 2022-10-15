import { HttpHeaders } from '@angular/common/http';
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

  loginFunction() {
    this.as.login(this.credentials).subscribe(
      (data: any) => {
        console.log(data)
        this.as.user = data.body; //the user in the UserService gets populated with the API's userResponse data
        
        this.router.navigate(['admin'])
      },

    )

  }

}
