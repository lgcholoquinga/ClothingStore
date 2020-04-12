import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }
  clickProduct(id: number) {
    console.log(id);
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
