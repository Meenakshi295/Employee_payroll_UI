import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
    
  }

  getEmployeeData(): Observable<any> {
    console.log("calling api")
    return this.httpClient.get(this.baseUrl + "/employee/get");
  }

  addEmployeeData(body: any): Observable<any> {
    console.log(body);
    return this.httpClient.post<any>(this.baseUrl + "/employee/add",body);
  }

  /*deleteEmployeeData(employeeId: number): Observable<any>
  //deleteEmployeeData(employeeId: number)
   {
    return this.httpClient.delete(this.baseUrl + "/employee/delete", 
    {
     headers: new HttpHeaders(),
     params: new HttpParams().append('id', employeeId)
    })

    //});
  }*/

  deleteEmployeeData(employeeId: number): Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl + "/employee/delete/"+employeeId);
    
  }
   


}
