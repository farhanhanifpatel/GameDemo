import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserdataComponent } from './userdata/userdata.component';
import { VerifycodeComponent } from './verifycode/verifycode.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { OtploginComponent } from './otplogin/otplogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { globalGuard } from './Gaurds/global.guard';

const routes: Routes = [

  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'users',
    component:UserdataComponent
  },
  {
    path:'verifycode',
    component:VerifycodeComponent
  },
  {
    path:'',
    component:LoginuserComponent
  },
  {
    path:'otplogin',
    component:OtploginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,canActivate:[globalGuard]
  },
  {
    path:'header',
    component:HeaderComponent
  },

  { path: '**', pathMatch: 'full', 
  component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
