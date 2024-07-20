import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tile } from '../../../types';

@Component({
  selector: 'app-account-tile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-tile.component.html',
  styleUrl: './account-tile.component.scss'
})
export class AccountTileComponent {

  @Input() tile!: Tile;
}
