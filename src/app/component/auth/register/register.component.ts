import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  isShow!: boolean;
  isRegister!: boolean;
  title: string[] = ['Signin', 'Register'];
  registerModel: any = {
    firstname: '',
    lastname: '',
    useranme: '',
    password: '',
    email: '',
    phone: '',
    rePassword: '',
  };
  credentials: any = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService) {
    this.isRegister = false
    this.authService.isRegisterVisible$.subscribe((status) => {
      this.isShow = status;
    });
  }

  swapRegisterOrSignin() {
    this.isRegister = !this.isRegister;
  }

  turnOffRegister() {
    this.authService.setShowRegister(false);
  }

  registerUser() {

    if (this.credentials.useranme == '' || this.credentials.password == '') {
      alert('Do not empty!!!');
      return;
    }
    this.authService.register(this.registerModel).subscribe({
      next: (token) => {
        console.log('User registed successfully');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  loginUser() {
    if (this.credentials.useranme == '' || this.credentials.password == '') {
      alert('Do not empty!!!');
      return;
    }

    this.authService.login(this.credentials).subscribe({
      next: (token) => {
        console.log('Login successfully, Token: ', token);
        localStorage.setItem('authToken', token);
        this.turnOffRegister();
        this.authService.setSignedIn(true);
        console.log(this.authService.isUserSignedIn$);
      },
      error: (error) => {
        console.error(error);
        alert('Wrong Username or Password!!!');
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
