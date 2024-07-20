import { Component, Input } from '@angular/core';
import { Tile } from '../../../types';
import { HomeComponent } from '../../../home/home.component';

@Component({
  selector: 'app-home-tile',
  standalone: true,
  imports: [],
  templateUrl: './home-tile.component.html',
  styleUrl: './home-tile.component.scss',
})
export class HomeTileComponent {
  @Input() tile!: Tile;

  constructor(private home: HomeComponent) {}

  getProduts(type: string) {
    if (type === "All") {
      this.home.getAll();
    } else {
      this.home.getAllByType(type);
    }
  }
}
