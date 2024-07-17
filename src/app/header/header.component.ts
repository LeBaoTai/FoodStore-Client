import { Component, Output, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../component/auth/register/register.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RegisterComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isUserSignedIn!: boolean;

  constructor(private authService: AuthService, private render: Renderer2) {
    this.authService.isUserSignedIn$.subscribe((status) => {
      this.isUserSignedIn = status;
    });
  }

  showInfoPopup(element: HTMLDivElement) {
    if (!this.isUserSignedIn) {
      this.render.removeClass(element, 'turn-on');
    }
  }

  showRegiter() {
    if (!this.isUserSignedIn) {
      this.authService.setShowRegister(true);
    }
  }
}
