import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      observer.next([
        { id: 1, name: 'Product 1', description: 'Product1', price: 100 },
        { id: 2, name: 'Product 2', description: 'Product2', price: 200 },
        { id: 3, name: 'Product 3', description: 'Product3', price: 300 }
      ]);
      observer.complete();
      return observer.next();
    });
  }


}