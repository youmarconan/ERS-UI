import { ApproveOrDenyReimbComponent } from './components/approve-or-deny-reimb/approve-or-deny-reimb.component';
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
import { WelcomeManagerComponent } from './components/welcome-manager/welcome-manager.component';
import { GetAllReimbComponent } from './components/get-all-reimb/get-all-reimb.component';
import { GetReimbByIdComponent } from './components/get-reimb-by-id/get-reimb-by-id.component';
import { GetReimbByStatusComponent } from './components/get-reimb-by-status/get-reimb-by-status.component';
import { GetReimbByTypeComponent } from './components/get-reimb-by-type/get-reimb-by-type.component';

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
  },
  {
    path:"manager", //path 
    component: WelcomeManagerComponent //component 
  },
  {
    path:"allReimb", //path 
    component: GetAllReimbComponent //component 
  },
  {
    path:"reimbId", //path 
    component: GetReimbByIdComponent //component 
  },
  {
    path:"reimbStatus", //path 
    component: GetReimbByStatusComponent //component 
  },
  {
    path:"reimbType", //path 
    component: GetReimbByTypeComponent //component 
  },
  {
    path:"status", //path 
    component: ApproveOrDenyReimbComponent //component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
