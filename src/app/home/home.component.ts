import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Nécessaire en standalone

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule], // 👈 Important pour utiliser routerLink ou router.navigate
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}


  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

}
