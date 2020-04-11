import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interface/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() clickAddToCart = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  addToCart(){
    this.clickAddToCart.emit(this.product.id);
  }

}
