import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = '/api/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/formations']);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  signup(email: string, password: string, nom: string, prenom: string) {
    return this.http.post<{ token: string }>('/api/auth/signup', { email, password, nom, prenom }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/formations']); // ou la page d’accueil de ton choix
      })
    );
  }



}
