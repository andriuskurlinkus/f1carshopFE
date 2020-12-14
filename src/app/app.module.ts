import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './service/product.service';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import {UserService} from './service/user.service';
import { AdduserComponent } from './admin/users/adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // providers: [ProductService, UserService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
