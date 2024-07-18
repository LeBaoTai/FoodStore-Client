import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signedIn = new BehaviorSubject<boolean>(false);
  private showRegister = new BehaviorSubject<boolean>(false);
  private url = 'http://localhost:8080/api';
  private tokenKey = 'authToken';

  isUserSignedIn$ = this.signedIn.asObservable();
  isRegisterVisible$ = this.showRegister.asObservable();

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  register(user: any): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http
      .post<{ token: string }>(`${this.url}/users`, user, { headers })
      .pipe(map((res) => res.token));
  }

  login(credentials: any): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http
      .post<any>(`${this.url}/auth/log-in`, credentials, { headers })
      .pipe(map((res) => res.result.token));
  }

  logout() {
    let token = this.getToken();
    this.removeToken();

    const headers = new HttpHeaders({ 'Content-Type': 'Application/json' });
    let payload = {
      token: token,
    };
    this.setSignedIn(false);
    this.setShowRegister(false);
    return this.http
      .post<any>(`${this.url}/auth/logout`, payload, { headers });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  setSignedIn(status: boolean) {
    this.signedIn.next(status);
  }

  setShowRegister(status: boolean) {
    this.showRegister.next(status);
  }
}
