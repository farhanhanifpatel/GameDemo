import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isSubmitted: boolean = false
  result: any;

  constructor(private http: HttpClient, private user: SignupService, private toaster: ToastrService, private rouetr: Router, private fb: FormBuilder) { }

  userRegister = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9]{1,})+([a-zA-Z0-9._-]?)+@([a-zA-Z0-9]{2,})+[.]+(([a-zA-Z]){2,10})+([.][a-zA-Z]{2,10})?$')]],

  });

  onSubmit() {

    this.isSubmitted = true
    if (this.userRegister.valid) {
      this.user.registeruser(this.userRegister.value).subscribe((result: any) => {

        if (result.message == 'verificantion code send on your email id..................!!') {
          this.toaster.success('Otp send you email!', '');
          this.rouetr.navigateByUrl('/verifycode');
        }

        this.result = result
      }, (error: any) => {
        console.log(error, '<<>>');
        this.result = error
        if (this.result.status == 400) {

          this.toaster.error('User Already Exits!', '');
          this.rouetr.navigateByUrl('/signup');
        }
      }
      )
    }

  }

  get email() {
    return this.userRegister.get('email');
  }


}
