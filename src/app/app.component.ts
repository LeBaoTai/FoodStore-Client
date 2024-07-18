import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';

import { RegisterComponent } from './component/auth/register/register.component';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit{
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      console.log('User is logged in');
      this.authService.setSignedIn(true);
    } else {
      console.log('User is not logged in');
    }
  }
}
