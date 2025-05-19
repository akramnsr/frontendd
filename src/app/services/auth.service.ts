import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = '/api/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        if (this.isBrowser()) {
          localStorage.setItem('token', response.token);
        }
        this.router.navigate(['/formations']);
      })
    );
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    if (!this.isBrowser()) return false;
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem('token');
  }

  signup(email: string, password: string, nom: string, prenom: string) {
    return this.http.post<{ token: string }>('/api/auth/signup', { email, password, nom, prenom }).pipe(
      tap(response => {
        if (this.isBrowser()) {
          localStorage.setItem('token', response.token);
        }
        this.router.navigate(['/formations']); // ou la page d’accueil de ton choix
      })
    );
  }
}
