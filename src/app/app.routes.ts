import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Food Store' },
  { path: 'account', component: AccountComponent, title: 'My Account' },
  { path: 'cart', component: CartComponent, title: 'Cart'}
];
