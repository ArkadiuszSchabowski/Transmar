import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private tokenSource = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSource.asObservable();

  constructor() {
    this.initializeUser();
  }

  getToken(): string | null {
    if (!this.isBrowser) {
      return null;
    }
    return localStorage.getItem('token');
  }

  initializeUser() {
    const token = this.getToken();
    if (token) {
      this.tokenSource.next(token);
    }
  }

  setUser(token: string) {
    if (this.isBrowser) {
      localStorage.setItem('token', token);
    }
    this.tokenSource.next(token);
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('token');
    }
    this.tokenSource.next(null);
  }
}