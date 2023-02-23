import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);



  authenticateUser(data:any){
this.http.post('',data)
  }

  getApi(data: any) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}`,  { observe: 'response' }).subscribe((res:any) => {
      if (res && res.body.length>=1) {
     //   this.isSellerLoggedIn.next(true);
        console.log(res)
      //  this.router.navigate(['/app-seller-home'])
      }
      else {
console.log("Something went wrong")
      }
    });
  }
  constructor(private http: HttpClient, private router: Router) { }
}
