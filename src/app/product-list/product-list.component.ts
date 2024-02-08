import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'; 
import { Product } from '../models/product.model'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true, 
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }}
      </li>
    </ul>
  `,
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = []; 

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

}


