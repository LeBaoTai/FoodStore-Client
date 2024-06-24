import { Component } from '@angular/core';
import { SideBarComponent } from '../component/side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { Tile } from '../types';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SideBarComponent, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  accountTitle: string = "Account";
  accountTiles: Tile[] = [
    {
      image: 'assets/account/user.png',
      title: 'My Infomation'
    },

    {
      image: 'assets/account/product.png',
      title: 'My Products'
    },

    {
      image: 'assets/account/order.png',
      title: 'Manage Order'
    },

    {
      image: 'assets/account/history.png',
      title: 'History'
    },

    {
      image: 'assets/account/logout.png',
      title: 'Logout'
    },
  ];
}
