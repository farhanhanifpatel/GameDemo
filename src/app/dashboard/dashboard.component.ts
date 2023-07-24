
import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  [x: string]: Object;
  items: any = []
  subCategory: any = [];
  users: any = [];
  products: any = [];
  list: any = [];
  invitation: any;
  balance: any;
  userss: any;
  quantity:any = ''
  productId:any = ''
  changProfile:any=''
  constructor(public dashboard: DashboardService, private router: Router,private fb: FormBuilder) {

    console.log(">>>>>>>");

    this.dashboard.getCategory().subscribe((response: any) => {
      console.log(response);
      this.items = response?.catagory;
      console.log(this.items);
    });

    this.dashboard.user_list().subscribe((user: any) => {
      console.log(user);
      this.users = user?.message;
      console.log(this.users);
    });

    this.dashboard.myProductList().subscribe((pro:any)=>{
    this.products = pro?.my_products;
    })

    this.dashboard.user().subscribe((u: any) => {
      console.log(u);
      this.userss = u?.message;
      console.log(this.userss);
    });
  }

  quantityChange(event:any){
    console.log('etv',event.target.value);
    this.quantity = event.target.value
    
  }
  getSubCategory(id: any) {
    this.subCategory = []
    this.dashboard.subCategory(id).subscribe((res) => {
      console.log(res);
      this.subCategory = res
      this.subCategory = this.subCategory.categoryid
      console.log(this.subCategory, '<<');
    })
  }


  getCategoryitem(id: any) {
    this.items = []
    this.dashboard.total_items(id).subscribe((res: any) => {
      console.log(res);
      this.items = res
      this.items = this.items.subcategoryid
      console.log(this.items, '<<');

    })
  }


  inviTation(id: any) {
    this.dashboard.addInvitation(id).subscribe((res: any) => {
      this.invitation = res?.reciver_id
      console.log('---->', res);
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'User Invited!'
      })  

    })
  }


  total_items(id: any) {
    this.dashboard.total_items(id).subscribe((res) => {
      console.log(res);
      this.list = res
      this.list = this.list.subcategories
    })
    console.log("---------------------------->", id);
  }

  productBuy(id:any,quantity:any){  
    console.log('buying',id,quantity);
    console.log(this.quantity,'quantity');
    this.dashboard.buyProduct(id,quantity).subscribe((pro:any)=>{
    console.log(pro,'<<pro');
    
    this.products = pro?.product_id
    console.log('----------------------------------------------->',this.products);
    Swal.fire({
      icon: 'success',
      title: '',
      text: 'PRODUCT BUY!'
    })
  }) 
  } 
}
