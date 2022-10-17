import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-user-by-username',
  templateUrl: './get-user-by-username.component.html',
  styleUrls: ['./get-user-by-username.component.css']
})
export class GetUserByUsernameComponent implements OnInit {

  constructor(private us:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  username : string = "";
  btn : boolean = false;
  

  getUserByUsername(){
    this.us.getUserByUsername(this.username).subscribe(

      (data:any) => {
        this.user = data; 
        console.log(this.us.user)
        console.log(this.user)
      }
    )
    this.btn = true;
  }

  user : UserResponse = {
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    active: false,
    roleName: ''
  } ;

  return(){
    this.router.navigate(['admin'])
  }
}
