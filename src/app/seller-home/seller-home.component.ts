import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetApiService } from '../services/get-api.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {

  login(data:object){
  this.getapi.getApi(data);
  }
constructor(private getapi:GetApiService,private http:HttpClient){

}
}
