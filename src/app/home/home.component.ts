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
    },

    {
      image: 'assets/category/beef.png',
      title: 'Beef',
    },

    {
      image: 'assets/category/chicken.png',
      title: 'Chicken',
    },

    {
      image: 'assets/category/crab.png',
      title: 'Crab',
    },

    {
      image: 'assets/category/fish.png',
      title: 'Fish',
    },

    {
      image: 'assets/category/pork.png',
      title: 'Pork',
    },
  ];
}
