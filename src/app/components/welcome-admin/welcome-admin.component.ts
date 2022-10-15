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

  constructor(private as:AuthService, private us:UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  firstName:string = this.as.user.firstName;

  goToGetALLUsers(){
    this.router.navigate(['allUsers'])
  }

  getAllUsers(){
    this.us.getAllUsers().subscribe(

      (data:any) => {
        console.log(data)
        this.us.users = data.body; 
      }
    )
  }

  id: string = "e8b266bf-bd32-4c6f-b6e1-1f9b97de1fee";

  getUserById(){
    this.us.getUserById(this.id).subscribe(

      (data:any) => {
        console.log(data)
        this.us.users = data.body; 
      }
    )
  }

}
