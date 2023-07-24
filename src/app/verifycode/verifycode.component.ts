import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../signup.service';
import { VerifycodeService } from '../verifycode.service';

@Component({
  selector: 'app-verifycode',
  templateUrl: './verifycode.component.html',
  styleUrls: ['./verifycode.component.css']
})
export class VerifycodeComponent {
result: any;

isSubmitted: boolean = false
constructor(private  http:HttpClient,private user:VerifycodeService,private toaster:ToastrService,private rouetr:Router,private fb: FormBuilder){

}
userRegister =this.fb.group({
  otp: new FormControl('',[Validators.required]),
});

onSubmit(){

  this.isSubmitted = true
  if(this.userRegister.valid){
      this.user.verifycode(this.userRegister.value).subscribe((result:any)=>{

        if(result.message == 'User Register....'){
          this.toaster.success('Register Succesfull!', '');
          this.rouetr.navigateByUrl('/');
        }
        this.result = result
      },(error:any)=>{  
        this.result = error
        if(this.result.status == 401 ){
          
          this.toaster.error('You enter wrong verification code!', '');        
        }
        if(this.result.status == 403)
          {
            this.toaster.warning('otp is expired!', '');
          } 
          
        else if(this.result.status == 400){
          
          this.toaster.error('please Enter Verification code!', '');        
          
        }

  })

    }
  
}
  












get otp(){
  return this.userRegister.get('otp');
}


}
