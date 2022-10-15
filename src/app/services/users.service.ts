import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

   users: UserResponse[] = []

   getAllUsers(): Observable<HttpResponse<UserResponse>[]>{


    return this.http.get<UserResponse[]>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/users") as unknown as Observable<HttpResponse<UserResponse>[]>
  
  }

  getUserById(id: string): Observable<HttpResponse<UserResponse>>{


    return this.http.get<UserResponse>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/users/byId/" + id) as unknown as Observable<HttpResponse<UserResponse>>
  
  }
}
