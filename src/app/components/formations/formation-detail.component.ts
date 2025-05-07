// src/app/components/formations/formation-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/formation.model';

@Component({
  selector: 'app-formation-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="formation">
      <h2>{{ formation.title }}</h2>
      <p>{{ formation.description }}</p>
      <a routerLink="/formations">← Retour à la liste</a>
    </div>
  `
})
export class FormationDetailComponent implements OnInit {
  formation!: Formation;  // le '!' indique à TypeScript qu'on l'initialisera via *ngIf

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formationService.getFormation(id)
      .subscribe(data => this.formation = data);
  }
}
