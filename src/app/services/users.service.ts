import { UserRequest } from './../models/user-request';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user-response';
import { UpdatedUserRequest } from '../models/updated-user-request';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public userId : string = '';

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

  getUserByUsername(username: string): Observable<HttpResponse<UserResponse>>{


    return this.http.get<UserResponse>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/users/byUsername/" + username) as unknown as Observable<HttpResponse<UserResponse>>
  
  }

  getUserByEmail(email: string): Observable<HttpResponse<UserResponse>>{


    return this.http.get<UserResponse>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/users/byEmail/" + email) as unknown as Observable<HttpResponse<UserResponse>>
  
  }

  register(user : UserRequest): Observable<HttpResponse<any>> {

    return this.http.post("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/users", user) as unknown as Observable<HttpResponse<any>>

    
  }

  update(user : UpdatedUserRequest): Observable<HttpResponse<any>> {

    return this.http.put("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/users", user) as unknown as Observable<HttpResponse<any>>

    
  }


}
