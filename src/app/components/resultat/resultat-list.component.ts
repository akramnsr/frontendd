import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResultatService } from '../../services/resultat.service';
import { Resultat } from '../../models/resultat.model';

@Component({
  selector: 'app-resultat-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resultat-list.component.html',
  styleUrls: ['./resultat-list.component.css']
})
export class ResultatListComponent implements OnInit {
  resultats: Resultat[] = [];

  constructor(private resultatService: ResultatService) {}

  ngOnInit(): void {
    // Affiche uniquement MES résultats (étudiant connecté)
    this.loadMesResultats();
  }

  loadMesResultats(): void {
    this.resultatService.getAllMyResults().subscribe({
      next: res => { this.resultats = res; },
      error: err => { console.error('Erreur lors du chargement des résultats', err); }
    });
  }
}
