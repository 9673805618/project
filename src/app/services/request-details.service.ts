import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDetails } from '../domain/request-details';

@Injectable({
  providedIn: 'root'
})
export class RequestDetailsService {
  private baseURL: string ="http://localhost:8080/requestdetailsapi/requestdetails";
  private baseURL2: string ="http://localhost:8080/requestdetailsapi/addrequestdetail";
  

  constructor(private httpClient : HttpClient) { }
  viewAllRequest(employeeId:number):Observable<RequestDetails[]>{
    console.log("in viewAllRequest()");
    
    return this.httpClient.get<RequestDetails[]>(this.baseURL+"/"+ employeeId);
  }
  addRequest(requestDetails:RequestDetails){
    console.log("in addRequest()");
    console.log(requestDetails);
    return this.httpClient.post<boolean>(this.baseURL2,requestDetails);
    
    
  }
}
