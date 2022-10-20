import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { WelcomeAdminComponent } from './components/welcome-admin/welcome-admin.component';
import { GetAllUsersComponent } from './components/get-all-users/get-all-users.component';
import { GetUserByIdComponent } from './components/get-user-by-id/get-user-by-id.component';
import { GetUserByUsernameComponent } from './components/get-user-by-username/get-user-by-username.component';
import { GetUserByEmailComponent } from './components/get-user-by-email/get-user-by-email.component';
import { RegisterNewUserComponent } from './components/register-new-user/register-new-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { WelcomeManagerComponent } from './components/welcome-manager/welcome-manager.component';
import { GetAllReimbComponent } from './components/get-all-reimb/get-all-reimb.component';
import { GetReimbByIdComponent } from './components/get-reimb-by-id/get-reimb-by-id.component';
import { GetReimbByStatusComponent } from './components/get-reimb-by-status/get-reimb-by-status.component';
import { GetReimbByTypeComponent } from './components/get-reimb-by-type/get-reimb-by-type.component';
import { WelcomeEmployeeComponent } from './components/welcome-employee/welcome-employee.component';
import { ViewMyReimbComponent } from './components/view-my-reimb/view-my-reimb.component';
import { CreateNewReimbComponent } from './components/create-new-reimb/create-new-reimb.component';
import { UpdateReimbComponent } from './components/update-reimb/update-reimb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeAdminComponent,
    GetAllUsersComponent,
    GetUserByIdComponent,
    GetUserByUsernameComponent,
    GetUserByEmailComponent,
    RegisterNewUserComponent,
    UpdateUserComponent,
    WelcomeManagerComponent,
    GetAllReimbComponent,
    GetReimbByIdComponent,
    GetReimbByStatusComponent,
    GetReimbByTypeComponent,
    WelcomeEmployeeComponent,
    ViewMyReimbComponent,
    CreateNewReimbComponent,
    UpdateReimbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
