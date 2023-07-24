import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class OtploginService {
  access: string = ''
  result: any;
  resultt: any;
  constructor(private http: HttpClient, private router: Router, private toaster: ToastrService) { }
  login(data: any) {
    console.log(data, '<<otp');

    this.http.post("http://127.0.0.1:8000/otpverify", data).subscribe(
      (result: any) => {

      localStorage.setItem("access", result.user.access);

      console.log(JSON.stringify(result.user));
      this.access = result.user

      console.log(result.user.access);

      this.result = result
      if (this.result.user) {
        console.log('status is 201');
        this.toaster.success('Login successfull!', '');
        this.router.navigateByUrl('/dashboard')

      } 
   
   

    },
    (error:any)=>{

      this.result = error
      if(error.status ==401)
      {
        console.log('status is 401');
        this.toaster.error('wrong otp!', '');
      }
      if(this.result.status == 403)
      {
        this.toaster.error('otp is expired!', '');
      }
      
    }

    )


  }
}
