import { Component, Input } from '@angular/core';
import { Tile } from '../../../types';
import { CommonModule } from '@angular/common';
import { AccountTileComponent } from '../../tile/account-tile/account-tile.component';

@Component({
  selector: 'app-account-side-bar',
  standalone: true,
  imports: [CommonModule, AccountTileComponent],
  templateUrl: './account-side-bar.component.html',
  styleUrl: './account-side-bar.component.scss'
})
export class AccountSideBarComponent {
  @Input() tiles!:Tile[];
  @Input() title!:string;
}
