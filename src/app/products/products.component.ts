import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 30,
      description: 'Camiseta de Marca'
    },
    {
      id: '2',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 40,
      description: 'Camiseta de Marca'
    },
    {
      id: '3',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 50,
      description: 'Camiseta de Marca'
    },
    {
      id: '4',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 30,
      description: 'Camiseta Blanca'
    },
    {
      id: '5',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 50,
      description: 'Camiseta de Tela'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  clickProduct(id: number) {
    console.log(id);
  }

}
