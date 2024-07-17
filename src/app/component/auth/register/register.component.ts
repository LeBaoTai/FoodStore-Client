import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  isShow!: boolean;
  isRegister!: boolean;
  title: string[] = ['Signin', 'Register'];

  constructor(private authService: AuthService) {
    this.isRegister = false;
    this.authService.isRegisterVisible$.subscribe((status) => {
      this.isShow = status;
    });
  }

  swapRegisterOrSignin() {
    this.isRegister = !this.isRegister;
  }

  turnOffRegistuer() {
    this.authService.setShowRegister(false);
  }
}
