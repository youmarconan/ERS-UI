import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-user-by-email',
  templateUrl: './get-user-by-email.component.html',
  styleUrls: ['./get-user-by-email.component.css']
})
export class GetUserByEmailComponent implements OnInit {

  constructor(private us:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  email : string = "";
  btn : boolean = false;
  

  getUserByEmail(){
    this.us.getUserByEmail(this.email).subscribe(

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
