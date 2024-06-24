import { Component, Input } from '@angular/core';
import { Tile } from '../../types';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {
  @Input() tile!: Tile;
}
