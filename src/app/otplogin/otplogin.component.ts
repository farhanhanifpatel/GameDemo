import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginuserService } from '../loginuser.service';
import { OtploginService } from '../otplogin.service';

@Component({
  selector: 'app-otplogin',
  templateUrl: './otplogin.component.html',
  styleUrls: ['./otplogin.component.css']
})
export class OtploginComponent {

  loginform  = new FormGroup  ({
    
    otp: new FormControl('',[Validators.required]),   
  })
constructor(private loginservice:OtploginService,private toastr:ToastrService,private rout:Router,private toaster:ToastrService){}
  userLogin(data:any)
  {
    console.log(data,'<<otplogin component');
    this.loginservice.login(data)
    console.warn(data)
  }
}
