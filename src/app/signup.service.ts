import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

    constructor(private http: HttpClient) { }

  registeruser (data:any):Observable<any>
  {
    console.log(data)
    
    return this.http.post("http://127.0.0.1:8000/signup",data)

    
  }
}
