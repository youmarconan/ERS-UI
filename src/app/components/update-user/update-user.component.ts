import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdatedUserRequest } from 'src/app/models/updated-user-request';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.btn
    this.updatedUser
  }

  btn: boolean = true;
  id : any ;

  click(){
    this.btn = true
    this.updatedUser = {
      userId: '',
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      isActive: "false",
      userRoleName: ''
    }
  }

  update(){
    this.us.update(this.updatedUser).subscribe(

      (data:any) => {
        this.id = data; 
        console.log(data)
      })

      console.log(this.updatedUser)

      this.btn = false;

  }

updatedUser : UpdatedUserRequest = {
  userId: '',
  username: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  isActive: "false",
  userRoleName: ''
}

  return() {
    this.router.navigate(['admin'])
  }


}
