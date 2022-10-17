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
    UpdateUserComponent
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
