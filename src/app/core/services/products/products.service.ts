import { Injectable } from '@angular/core';
import { Product } from 'src/app/interface/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getAllProducts() {
    return this.products;
  }
  getProductById(id: string) {
    return this.products.find(item => id === item.id);
  }
}
