import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../component/side-bar/side-bar.component';
import { ProductComponent } from '../component/product/product.component';
import { Product, Tile } from '../types';
import { CommonModule } from '@angular/common';

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
      image: 'assets/category/beef.png',
      title: 'Beef',
      url: '/beef',
    },
    {
      image: 'assets/category/chicken.png',
      title: 'Chicken',
      url: '/chicken',
    },
    {
      image: 'assets/category/crab.png',
      title: 'Crab',
      url: '/crab',
    },
    {
      image: 'assets/category/fish.png',
      title: 'Fish',
      url: '/fish',
    },
    {
      image: 'assets/category/pork.png',
      title: 'Pork',
      url: '/pork',
    },
  ];

  products: Product[] = [
    {
      name: 'Chicken',
      price: 12.31,
      image: 'assets/product/salad.jpg',
      type: '',
    },
    {
      name: 'Chicken',
      price: 12.31,
      image: 'assets/product/salad.jpg',
      type: '',
    },
    {
      name: 'Chicken',
      price: 12.31,
      image: 'assets/product/salad.jpg',
      type: '',
    },
    {
      name: 'Chicken',
      price: 12.31,
      image: 'assets/product/salad.jpg',
      type: '',
    },
    {
      name: 'Chicken',
      price: 12.31,
      image: 'assets/product/salad.jpg',
      type: '',
    },
    {
      name: 'Chicken',
      price: 12.31,
      image: 'assets/product/salad.jpg',
      type: '',
    },
  ];
}
