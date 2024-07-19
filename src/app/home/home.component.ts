import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from '../component/product/product.component';
import { SideBarComponent } from '../component/side-bar/side-bar.component';
import { Product, Tile } from '../types';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    SideBarComponent,
    ProductComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  foodTitle: string = 'Category';
  foodTiles: Tile[] = [
    {
      image: 'assets/category/select-all.png',
      title: 'All',
      url: '',
    },
    {
      image: 'assets/category/vegetables.png',
      title: 'Vegetables',
      url: '/vegetables',
    },
    {
      image: 'assets/category/meat.png',
      title: 'Meat',
      url: '/meat',
    },
    {
      image: 'assets/category/seafood.png',
      title: 'Seafoot',
      url: '/seafoot',
    },
    {
      image: 'assets/category/dairy.png',
      title: 'Dairy',
      url: '/dairy',
    },
    {
      image: 'assets/category/fruits.png',
      title: 'Fruits',
      url: '/fruit',
    },
  ];


  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products as Product[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
