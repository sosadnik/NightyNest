import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    
    <app-product-list></app-product-list>


    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = ' ';
}
