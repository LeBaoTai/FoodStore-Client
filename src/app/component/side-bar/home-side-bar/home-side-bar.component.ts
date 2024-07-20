import { Component, Input } from '@angular/core';
import { Tile } from '../../../types';
import { CommonModule } from '@angular/common';
import { HomeTileComponent } from '../../tile/home-tile/home-tile.component';

@Component({
  selector: 'app-home-side-bar',
  standalone: true,
  imports: [CommonModule, HomeTileComponent],
  templateUrl: './home-side-bar.component.html',
  styleUrl: './home-side-bar.component.scss',
})
export class HomeSideBarComponent {
  @Input() tiles!: Tile[];
  @Input() title!: string;
}
