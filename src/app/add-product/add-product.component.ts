import { Component } from '@angular/core';
import { GetApiService } from '../services/get-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addproduct(data:object){

this.getapi.addProduct(data);
this.getapi.isSellerLoggedIn.next(true)
  }
  constructor(private getapi:GetApiService){

  }
}
