import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {UsersComponent} from './admin/users/users.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent },
  {path: 'addproduct', component: ProductFormComponent },
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
