import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="footer-bar">
      <div class="footer-content">
        <p>&copy; 2025 <span class="gradient-logo">E-Learn</span>. Tous droits réservés.</p>
        <p>Conçu avec ❤️ pour l'éducation numérique.</p>
        <div class="footer-links">
          <a routerLink="/formations" routerLinkActive="active">Formations</a>
          <a routerLink="/quizzes" routerLinkActive="active">Quizzes</a>
          <a routerLink="/rapports" routerLinkActive="active">Rapports</a>
          <a routerLink="/resultats" routerLinkActive="active">Résultats</a>
          <a routerLink="/profil" routerLinkActive="active">Profil</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-bar {
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.6);
      color: #333;
      text-align: center;
      padding: 2rem 1rem;
      font-family: 'Poppins', sans-serif;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .gradient-logo {
      background: linear-gradient(to right, #ff4d88, #00c0ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }

    .footer-links {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.2rem;
    }

    .footer-links a {
      color: #aaa;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .footer-links a:hover,
    .footer-links a.active {
      color: #ff4d88;
    }
  `]
})
export class FooterComponent {}
