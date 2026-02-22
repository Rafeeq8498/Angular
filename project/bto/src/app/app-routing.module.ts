import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ViewProductsComponent } from './components/admin/view-products/view-products.component';
import { ViewOrdersComponent } from './components/user/view-orders/view-orders.component';
import { WishlistComponent } from './components/user/wishlist/wishlist.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { ManageOrdersComponent } from './components/admin/manage-orders/manage-orders.component';
import { DashBoardComponent } from './components/user/dash-board/dash-board.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:DashBoardComponent,
    children:[
      {path:'view',component:ViewProductsComponent},
      {path:'orders',component:ViewOrdersComponent},
      {path:'wishlist',component:WishlistComponent}
    ]
  },
  {
    path:'admin',component:DashboardComponent,
    children:[
      {path:'add',component:AddProductsComponent},
      {path:'view',component:ViewProductsComponent},
      {path:'manage',component:ManageProductsComponent},
      {path:'orders',component:ManageOrdersComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
