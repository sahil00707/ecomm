import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
 delete(id:number){
return this.http.delete(`http://localhost:3000/seller/${id}`)
 }
  getData(){
   return this.http.get('http://localhost:3000/seller')
  }
  addProduct(data: any) {
    this.http.post('http://localhost:3000/product', data).subscribe();
  }

  sendData(data: any) {
    return (this.http.post('http://localhost:3000/seller', data).subscribe());
    localStorage.setItem('data', JSON.stringify(data))
  }
  getApi() {
    this.http.get(`http://localhost:3000/seller`, { observe: 'response' }).subscribe((res: any) => {
      if (res && res.body.length >= 1) {
        console.log(res);
      }
      else {
        console.log("Something went wrong")
      }
    });
  }
  constructor(private http: HttpClient, private router: Router) { }
}
