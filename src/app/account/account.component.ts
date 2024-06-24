import { Component } from '@angular/core';
import { SideBarComponent } from '../component/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { Tile } from '../types';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SideBarComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  accountTitle: string = 'Account';
  accountTiles: Tile[] = [
    {
      image: 'assets/account/user.png',
      title: 'My Infomation',
      url: '/account/info',
    },

    {
      image: 'assets/account/product.png',
      title: 'My Products',
      url: '/account/my-products',
    },

    {
      image: 'assets/account/order.png',
      title: 'Manage Orders',
      url: '/manage-orders',
    },

    {
      image: 'assets/account/history.png',
      title: 'History',
      url: '/account/history',
    },

    {
      image: 'assets/account/logout.png',
      title: 'Logout',
      url: '/account/logout',
    },
  ];
}
