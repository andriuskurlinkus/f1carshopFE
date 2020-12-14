import {Component} from '@angular/core';
import {Product} from '../product/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
    this.product = new Product();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.productService.save(this.product).subscribe(result => this.gotoProductList());
  }

  // tslint:disable-next-line:typedef
  gotoProductList() {
    this.router.navigate(['/products']);
  }
}
