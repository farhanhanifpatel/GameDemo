import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  result: any
  constructor(private http: HttpClient, private router: Router, private toaster: ToastrService) { }
  login(data: any) {
    this.http.post("http://127.0.0.1:8000/userlogin", data).subscribe(
      (result: any) => {
        console.log(result, '<<result');
        if (result.message == 'Otp send you email') {
          this.toaster.success('Login Otp send you email!', '');
          this.router.navigateByUrl('/otplogin');
        }
        this.result = result
      }, (error: any) => {
        console.log(error, '<<>>'); 
        this.result = error
        if (this.result.status == 401) {
          console.log('status is 401');
          // alert('no user found')
          this.toaster.error('user not found!', '');

        }
      })
  }
}
