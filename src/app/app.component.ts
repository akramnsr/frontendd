// src/app/app.component.ts
import { Component }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,    // pour *ngIf si tu en as besoin, et tout le reste
    RouterOutlet     // pour <router-outlet>
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // L’erreur “title n’existe pas” vient du fait que ton template dit {{ title }}
  // Il faut donc ajouter cette propriété :
  title = 'FormationsApp';
}
