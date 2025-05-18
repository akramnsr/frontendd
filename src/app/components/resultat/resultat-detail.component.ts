import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResultatService } from '../../services/resultat.service';
import { Resultat } from '../../models/resultat.model';

@Component({
  selector: 'app-resultat-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Détail du Résultat</h2>
    <div *ngIf="resultat">
      <p><strong>ID:</strong> {{ resultat.id }}</p>
      <p><strong>Score:</strong> {{ resultat.score }}</p>
    </div>
  `
})
export class ResultatDetailComponent implements OnInit {
  resultat?: Resultat;

  constructor(
    private route: ActivatedRoute,
    private resultatService: ResultatService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.resultatService.getById(id).subscribe({
      next: r => this.resultat = r,
      error: err => console.error('Erreur de chargement', err)
    });
  }
}
