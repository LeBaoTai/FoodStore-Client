import { Component, Input } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { Tile } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TileComponent, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() tiles!:Tile[];
  @Input() title!:string;
}
