import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { Product } from '../../../interface/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    const id = params.id;
    this.fetchProductById(id);
    });
  }

  fetchProductById(id: string) {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const nuevo: Product = {
      name: 'Sombrero',
      image: 'https://i.imgur.com/CMR7dbO.jpg',
      price: 32,
      description: 'Sombrero original'
    };
    this.productService.createProduct(nuevo).subscribe(product => {
      console.log(product);
    });
  }
  updateProduct() {
    const updatep: Partial<Product> = {
      name: 'Sombrero Editado',
      description: 'Sombrero original'
    };
    this.productService.updateProduct('5e93931c48ebf5002393a07c', updatep).subscribe( product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct('5e93931c48ebf5002393a07c').subscribe(product => {
      console.log(product);
    });
  }
}
