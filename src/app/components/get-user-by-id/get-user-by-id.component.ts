import { UserResponse } from './../../models/user-response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-user-by-id',
  templateUrl: './get-user-by-id.component.html',
  styleUrls: ['./get-user-by-id.component.css']
})
export class GetUserByIdComponent implements OnInit {

  constructor(private us:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  id : string = "";
  btn : boolean = false;

  btnn: boolean = false;
  error : string = ''  


  getUserById(){
    this.us.getUserById(this.id).subscribe(

      (data:any) => {
        this.user = data; 
        console.log(this.us.user)
        console.log(this.user)
        this.btnn = false;
        this.btn = true;
      },
      Error =>{
        this.error = Error.error.message
        console.log(Error)
        this.btnn = true
        this.btn = false;
      }
    )
    
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
