import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signedIn = new BehaviorSubject<boolean>(false);
  private showRegister = new BehaviorSubject<boolean>(false);

  isUserSignedIn$ = this.signedIn.asObservable();
  isRegisterVisible$ = this.showRegister.asObservable();


  setSignedIn(status: boolean) {
    this.signedIn.next(status);
  }

  setShowRegister(status: boolean) {
    this.showRegister.next(status);
  }
}
