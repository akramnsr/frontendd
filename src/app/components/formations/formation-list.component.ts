// src/app/components/formations/formation-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormationService, FormationPage } from '../../services/formation.service';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="formation-list">
      <h2>Liste des formations</h2>

      <div *ngIf="formations.length === 0">
        <p>Aucune formation disponible.</p>
      </div>

      <div *ngFor="let formation of formations" class="formation">
        <h3>
          <a [routerLink]="['/formations', formation.id]" routerLinkActive="active">
            {{ formation.title }}
          </a>
        </h3>
        <p>{{ formation.description }}</p>
      </div>

      <nav class="pagination" role="navigation" aria-label="Pagination">
        <button (click)="prevPage()" [disabled]="page === 0">Précédent</button>
        <span>Page {{ page + 1 }} / {{ totalPages }}</span>
        <button (click)="nextPage()" [disabled]="page >= totalPages - 1">Suivant</button>
      </nav>
    </div>
  `
})
export class FormationListComponent implements OnInit {
  formations: any[] = [];
  page = 0;
  totalPages = 0;

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formationService.getFormations(this.page).subscribe((data: FormationPage) => {
      this.formations = data.content;
      this.totalPages = data.totalPages;
    });
  }

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadFormations();
    }
  }

  prevPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadFormations();
    }
  }
}
