import { Component, Input } from '@angular/core';
import { Tile } from '../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {
  @Input() tile!: Tile;
}
