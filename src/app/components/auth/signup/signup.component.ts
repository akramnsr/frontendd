import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  nom: string = '';
  prenom: string = '';
  errorMsg: string = '';
  successMsg: string = '';

  slogans: string[] = [
    'Learn with <span class="gradient-text">freedom</span>',
    'Build your <span class="gradient-text">future</span>',
    'Unlock your <span class="gradient-text">potential</span>'
  ];
  currentSloganIndex: number = 0;

  constructor(private authService: AuthService, private router: Router) {}

  get currentSlogan(): string {
    return this.slogans[this.currentSloganIndex];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentSloganIndex = (this.currentSloganIndex + 1) % this.slogans.length;
    }, 3000);
  }

  onSignup() {
    this.errorMsg = '';
    this.successMsg = '';
    this.authService.signup(this.email, this.password, this.nom, this.prenom).subscribe({
      next: () => this.router.navigate(['/formations']),
      error: (err: any) => {
        if (typeof err.error === 'string') {
          this.errorMsg = err.error;
        } else if (err.error && err.error.message) {
          this.errorMsg = err.error.message;
        } else {
          this.errorMsg = "Erreur d'inscription";
        }
      }
    });
  }
}
