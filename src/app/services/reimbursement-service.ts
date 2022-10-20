import { ReimbursementResponse } from './../models/reimbursement-response';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApproveOrDenyReimbForm } from '../models/approve-or-deny-reimb-form';
import { ReimbRequest } from '../models/reimb-request';
import { UpdateReimbRequest } from '../models/update-reimb-request';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private http:HttpClient) { }

  public reimbId : string = '';

  getAllReimbs(): Observable<HttpResponse<ReimbursementResponse>[]>{


    return this.http.get<ReimbursementResponse[]>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement") as unknown as Observable<HttpResponse<ReimbursementResponse>[]>
  
  }

  getReimbById(id: string): Observable<HttpResponse<ReimbursementResponse>>{


    return this.http.get<ReimbursementResponse>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement/byId/" + id) as unknown as Observable<HttpResponse<ReimbursementResponse>>
  
  }

  getReimbByStatus(status: string): Observable<HttpResponse<ReimbursementResponse[]>>{


    return this.http.get<ReimbursementResponse[]>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement/byStatus/" + status) as unknown as Observable<HttpResponse<ReimbursementResponse[]>>
  
  }

  getReimbByType(type: string): Observable<HttpResponse<ReimbursementResponse[]>>{


    return this.http.get<ReimbursementResponse[]>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement/byType/" + type) as unknown as Observable<HttpResponse<ReimbursementResponse[]>>
  
  }

  approveOrDeny(form : ApproveOrDenyReimbForm): Observable<HttpResponse<any>> {

    return this.http.put("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement/manager", form , {responseType: 'text'}) as unknown as Observable<HttpResponse<any>>

  }

  getMyReimbs(): Observable<HttpResponse<ReimbursementResponse>[]>{

    return this.http.get<ReimbursementResponse[]>("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement/myReimbs") as unknown as Observable<HttpResponse<ReimbursementResponse>[]>
  }

  
  createReimb(form : ReimbRequest): Observable<HttpResponse<any>> {

    return this.http.post("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement", form ) as unknown as Observable<HttpResponse<any>>

    
  }

  updateReimb(form: UpdateReimbRequest): Observable<HttpResponse<any>> {

    return this.http.put("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/reimbursement", form ) as unknown as Observable<HttpResponse<any>>

  }
  
}
