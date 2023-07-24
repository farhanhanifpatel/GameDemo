import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifycodeService {

  constructor(private http: HttpClient) { }

  verifycode (data:any):Observable<any>
  {
    console.log(data)
    
    return this.http.post("http://127.0.0.1:8000/verifyOtp",data)
    
  }
}
    