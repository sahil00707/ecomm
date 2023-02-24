import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { GetApiService } from '../services/get-api.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent  implements OnInit{

constructor(private getapi:GetApiService,private http:HttpClient){

}
  ngOnInit(): void {
   
  }

register(data:any){
  this.getapi.sendData(data);
  console.log(this.getapi.getApi())
  }
}
