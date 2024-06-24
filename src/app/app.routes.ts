import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { InfoComponent } from './component/account/info/info.component';
import { MyProductsComponent } from './component/account/my-products/my-products.component';
import { ManageOrdersComponent } from './component/account/manage-orders/manage-orders.component';
import { HistoryComponent } from './component/account/history/history.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Food Store' },
  { path: 'account', component: AccountComponent, title: 'My Account' },
  { path: 'cart', component: CartComponent, title: 'Cart'},

  // account path
  { path: 'account/info', component: InfoComponent, title: 'My Information' },
  { path: 'account/my-products', component: MyProductsComponent, title: 'My Products' },
  { path: 'account/manager-orders', component: ManageOrdersComponent, title: 'Orders' },
  { path: 'account/history', component: HistoryComponent, title: 'History' },
];
