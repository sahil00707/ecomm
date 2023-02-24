import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiService } from '../services/get-api.service';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent  implements OnInit{
  ngOnInit(){
   
  }
  signUp(data:object){

    this.getapi.sendData(data);


this.router.navigate(['/app-seller-home'])
  }
  constructor(private getapi:GetApiService,private router:Router){

  }
}
