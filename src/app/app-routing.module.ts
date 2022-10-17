import { GetUserByEmailComponent } from './components/get-user-by-email/get-user-by-email.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUsersComponent } from './components/get-all-users/get-all-users.component';
import { GetUserByIdComponent } from './components/get-user-by-id/get-user-by-id.component';
import { GetUserByUsernameComponent } from './components/get-user-by-username/get-user-by-username.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeAdminComponent } from './components/welcome-admin/welcome-admin.component';
import { RegisterNewUserComponent } from './components/register-new-user/register-new-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path:"", //base path
    component: LoginComponent
  },
  {
    path:"admin", //path 
    component: WelcomeAdminComponent //component 
  },

  {
    path:"allUsers", //path 
    component: GetAllUsersComponent //component 
  },
  {
    path:"userId", //path 
    component: GetUserByIdComponent //component 
  },
  
  {
    path:"username", //path 
    component: GetUserByUsernameComponent //component 
  },
  
  {
    path:"userEmail", //path 
    component: GetUserByEmailComponent //component 
  },
  {
    path:"newUser", //path 
    component: RegisterNewUserComponent //component 
  },
  {
    path:"user", //path 
    component: UpdateUserComponent //component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
