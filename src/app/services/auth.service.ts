import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  user: UserResponse = {
    id:"",
    username:"",
    email:"",
    firstName:"",
    lastName:"",
    active:false,
    roleName:""
  }

  login(credentials:Credentials):Observable<HttpResponse<UserResponse>>{
    

    return this.http.post("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/auth", credentials, {observe:"response"}) as Observable<HttpResponse<UserResponse>>

  
  }
}
