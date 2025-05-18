import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="navbar">
      <div class="navbar-container">
        <div class="left-section">
          <a routerLink="/" class="logo">E-Learn</a>
        </div>

        <!-- ✅ Pour les routes "classiques" -->
        <div class="right-section" *ngIf="!isMinimalRoute()">
          <nav class="nav-links">
            <a routerLink="/formations" routerLinkActive="active">Formations</a>
            <a routerLink="/quizzes" routerLinkActive="active">Quizzes</a>
            <a routerLink="/rapports" routerLinkActive="active">Rapports Étudiants</a>
            <a routerLink="/resultats" routerLinkActive="active">Résultats</a>
          </nav>

          <div class="avatar-wrapper">
            <a routerLink="/profil" class="profile-link">
              <img src="ayoub.jpeg" alt="Profil" class="profile-pic" />
            </a>
          </div>
        </div>

        <!-- ✅ Pour les pages login/signup -->
        <div class="right-section" *ngIf="isMinimalRoute()">
          <nav class="auth-links">
            <a routerLink="/login" routerLinkActive="active" class="auth-link">Login</a>
            <a routerLink="/signup" routerLinkActive="active" class="signup-btn">Sign up</a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: white;
      padding: 1rem 2rem;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      white-space: nowrap;
      background: linear-gradient(to right, #ff4d88, #00cfff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      margin-right: 2rem;
    }

    .nav-links,
    .auth-links {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .nav-links a,
    .auth-links a {
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .nav-links a {
      color: #b0b0b0;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #ff4d88;
    }

    .auth-link {
      color: #888;
      font-weight: bold;
    }

    .signup-btn {
      padding: 0.4rem 1rem;
      border-radius: 999px;
      border: 2px solid #2979ff;
      color: #2979ff;
      font-weight: bold;
    }

    .signup-btn:hover {
      background-color: #2979ff;
      color: white;
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .avatar-wrapper {
      margin-left: auto;
    }

    .profile-pic {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #ff4d88;
      transition: transform 0.3s ease;
    }

    .profile-pic:hover {
      transform: scale(1.05);
    }
  `]
})
export class NavbarComponent {
  constructor(public router: Router) {}

  isMinimalRoute(): boolean {
    return ['/', '/login', '/signup'].includes(this.router.url);
  }
}
