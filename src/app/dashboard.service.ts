import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtploginService } from './otplogin.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  access: any = ''
  result:any=''
  router: any;
  constructor(private http: HttpClient, private otp: OtploginService,private toaster:ToastrService) {
    this.getItems()
    this.access = this.otp.access
  }
  getItems() {}

  headers = new HttpHeaders();

  GetHeader() {
    this.headers.append("Authorization", `Bearer ${localStorage.getItem('access')}`);
    return this.headers;
  }


  //Main Category
  getCategory() {
    return this.http.get("http://127.0.0.1:8000/main-category",
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access')}`
        },
      });
  }


  //Sub category
  subCategory(id: any) {
    return this.http.post("http://127.0.0.1:8000/subcategories", {
      "categoryid": (id == 'wearbales' ? 1 : 2 )
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
    });
  }

  //Listing Of Top User 
  user_list() {
    return this.http.get("http://127.0.0.1:8000/topuser",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
    });
  }


  //Listing of category items
  total_items(id: any) {
    return this.http.post("http://127.0.0.1:8000/category-item", {
      "subcategoryid": id
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
    });
  }


  //Add invitaion to friend
  addInvitation(id:any) {
    console.log(id)
    let response = this.http.post("http://127.0.0.1:8000/invitation", {
      "reciver_id": id
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
    });
      console.log(response)
      return response
  }


   //Buy Product
   buyProduct(id:any,quantity:any) {
    console.log(id)
    let response = this.http.post("http://127.0.0.1:8000/buyProduct", {
      "product_id": id,
      "quantity":quantity
    },
         {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access')}`
        },
      });
      console.log(response)

    

      return response
    
   
  }



  //balance Of login User
  userbalance() {
    return this.http.get("http://127.0.0.1:8000/userbalance",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
    });
  }


  //Listing Of All User
  user() {
    return this.http.get("http://127.0.0.1:8000/userlist",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
    });
  }

  myProductList(){
    return this.http.get("http://127.0.0.1:8000/product_list",
    {

        headers:{
          'Authorization': `Bearer ${localStorage.getItem('access')}`
        },

    });
  }


    //Update Profile
    updateProfile(bio:any,profile_pitucher:any) {
    console.log(bio)
    let response = this.http.post("http://127.0.0.1:8000/updateprofile", {
      "bio": bio,
      "profile_pitucher":profile_pitucher
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      },
    });
      console.log(response)
      return response
    
  }
 

}