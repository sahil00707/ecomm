import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
isSellerLoggedIn=new BehaviorSubject<boolean>(false);

  getApi(data:any){
     this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((res)=>{
if(res){
this.isSellerLoggedIn.next(true);
}
else{

}
    });
  }
  constructor(private http:HttpClient) { }
}
