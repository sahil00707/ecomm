import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [
  {
    path:'app-home',
    component:HomeComponent,
   // canActivate:[AuthGuard]
  },
  {
    path:'app-seller-auth',
    component:SellerAuthComponent
  },
 
  {
    path:'app-seller-home',
    component:SellerHomeComponent,
    //canActivate:[AuthGuard]
  },
  {
    path:'app-add-product',
    component:AddProductComponent,
    //canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
