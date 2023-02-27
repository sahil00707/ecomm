import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MyLibModule } from 'my-lib';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        SellerAuthComponent,
        SellerHomeComponent,
        AddProductComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
     
    ]
})
export class AppModule { }
