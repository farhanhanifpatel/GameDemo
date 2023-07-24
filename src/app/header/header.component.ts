import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  balance: any = [];
  changProfile: any;
  bio: any;
profile_pitucher: any;
$event1: any;



  constructor(private router:Router,private dashboard:DashboardService){

    this.dashboard.userbalance().subscribe((bal:any)=>{
      this.balance = bal?.message;
      console.log(this.balance);
    })
    
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    localStorage.clear()
    this.router.navigate(['/'],{replaceUrl:true});
  }

  profile(bio:any,profile_pitucher:any){
    this.dashboard.updateProfile(bio,profile_pitucher).subscribe((update:any)=>{

      this.changProfile = update?.message
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'PROFILE UPDATE..!'
      })
  
    })
  }
  emailChange(event:any){
    console.log('etv',event.target.value);
    this.bio = event.target.value
    // this.profile_pitucher = event.target.value
    
  }

  profileChange(event:any){
    console.log('etv',event.target.value);
    this.profile_pitucher = event.target.value
    
  }
}
