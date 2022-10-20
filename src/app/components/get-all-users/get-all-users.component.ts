import { Router } from '@angular/router';
import { UserResponse } from './../../models/user-response';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  constructor(private us:UsersService, private router:Router) { }

  ngOnInit(): void {

    this.getAllUsers()

  }

  
  getAllUsers(){
    this.us.getAllUsers().subscribe(

      (data:any) => {
        console.log(data)
        this.users = data; 
        console.log(this.users)
      }
    )
  }

  users : UserResponse[] = this.us.users

  return(){
    this.router.navigate(['admin'])
  }

  update(id : string){
    this.us.userId = id
    this.router.navigate(['user'])
  }
}
