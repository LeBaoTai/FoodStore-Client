import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../component/side-bar/side-bar.component';
import { ProductComponent } from '../component/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SideBarComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
