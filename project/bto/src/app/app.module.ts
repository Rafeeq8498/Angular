import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { ManageOrdersComponent } from './components/admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { ViewProductsComponent } from './components/admin/view-products/view-products.component';
import { ProductDetailsComponent } from './components/user/product-details/product-details.component';
import { ViewOrdersComponent } from './components/user/view-orders/view-orders.component';
import { WishlistComponent } from './components/user/wishlist/wishlist.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddProductsComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    ViewProductsComponent,
    ProductDetailsComponent,
    ViewOrdersComponent,
    WishlistComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
