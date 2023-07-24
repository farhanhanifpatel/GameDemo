import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginuserService } from '../loginuser.service';
import { VerifycodeService } from '../verifycode.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

  isSubmitted: boolean = false
  logInFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9]{1,})+([a-zA-Z0-9._-]?)+@([a-zA-Z0-9]{2,})+[.]+(([a-zA-Z]){2,10})+([.][a-zA-Z]{2,10})?$')]],

  });
  constructor(private loginservice: LoginuserService, private toastr: ToastrService, private rout: Router, private toaster: ToastrService, private fb: FormBuilder) {

  }
  userLogin() {
    this.isSubmitted = true

    console.log(this.logInFormGroup.value);

    if (!this.logInFormGroup.invalid) {
      this.loginservice.login(this.logInFormGroup.value)
      console.log(this.logInFormGroup.value)
        
      // this.toaster.success('Otp send on your email!', '');
      console.log(this.loginservice.result)
      // console.log(this.loginservice.login())
      // this.rout.navigateByUrl('/otplogin');

    }

    else {
      // this.toaster.error('user not found!', '');
      console.log(this.loginservice.result)
      
      console.log('form invalid');
      this.rout.navigateByUrl('');
    }


  }





}
