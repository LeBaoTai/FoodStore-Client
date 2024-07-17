import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @Input() isShow! :boolean;

  
  turnOffRegistuer() {
    this.isShow = false;
  }
}
