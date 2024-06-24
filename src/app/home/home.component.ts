import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../component/side-bar/side-bar.component';
import { ProductComponent } from '../component/product/product.component';
import { Tile } from '../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SideBarComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  foodTitle: string = 'Category';
  foodTiles: Tile[] = [
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
}
