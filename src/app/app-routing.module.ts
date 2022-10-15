import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUsersComponent } from './components/get-all-users/get-all-users.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeAdminComponent } from './components/welcome-admin/welcome-admin.component';

const routes: Routes = [
  {
    path:"", //so when the application first starts, this component will be rendered
    component: LoginComponent
  },
  {
    path:"admin", //path is the URL we can use to access the component
    component: WelcomeAdminComponent //component is the component we intend to access
  },

  {
    path:"allUsers", //path is the URL we can use to access the component
    component: GetAllUsersComponent //component is the component we intend to access
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
