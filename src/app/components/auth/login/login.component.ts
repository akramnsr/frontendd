import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  slogans: string[] = [
    'Idea to <span class="gradient-text">YouTube</span> video',
    'Idea to <span class="gradient-text">Slideshow</span> video',
    'Idea to <span class="gradient-text">Social Ad</span> video'
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

  onLogin() {
    this.errorMsg = '';
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/formations']),
      error: () => this.errorMsg = "Email ou mot de passe incorrect !"
    });
  }
}
