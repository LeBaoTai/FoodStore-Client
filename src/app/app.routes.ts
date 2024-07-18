import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './component/account/history/history.component';
import { InfoComponent } from './component/account/info/info.component';
import { ManageOrdersComponent } from './component/account/manage-orders/manage-orders.component';
import { MyProductsComponent } from './component/account/my-products/my-products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Food Store' },
  { path: 'cart', component: CartComponent, title: 'Cart' },

  // account path
  {
    path: 'account',
    component: AccountComponent,
    title: 'My Account',
    children: [
      {
        path: 'infor',
        component: InfoComponent,
        title: 'My Information',
      },
      {
        path: 'my-products',
        component: MyProductsComponent,
        title: 'My Products',
      },
      {
        path: 'manage-orders',
        component: ManageOrdersComponent,
        title: 'Orders',
      },
      {
        path: 'history',
        component: HistoryComponent,
        title: 'History',
      },
    ],
  },
];
