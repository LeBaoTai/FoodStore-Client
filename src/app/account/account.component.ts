import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountSideBarComponent } from '../component/side-bar/account-side-bar/account-side-bar.component';
import { Tile } from '../types';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountSideBarComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  accountTitle: string = 'Account';
  accountTiles: Tile[] = [
    {
      image: 'assets/account/user.png',
      title: 'My Infomation',
      url: '/account/infor',
    },

    {
      image: 'assets/account/product.png',
      title: 'My Products',
      url: '/account/my-products',
    },

    {
      image: 'assets/account/order.png',
      title: 'Manage Orders',
      url: '/account/manage-orders',
    },

    // {
    //   image: 'assets/account/history.png',
    //   title: 'History',
    //   url: '/account/history',
    // },

    {
      image: 'assets/account/logout.png',
      title: 'Logout',
      url: '/account/logout',
    },
  ];
}
