import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/products';
  }
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  // tslint:disable-next-line:typedef
  public save(product: Product) {
    return this.http.post<Product>(this.productsUrl, product);
  }
}
