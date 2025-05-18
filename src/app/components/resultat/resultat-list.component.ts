import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResultatService } from '../../services/resultat.service';
import { Resultat } from '../../models/resultat.model';

@Component({
  selector: 'app-resultat-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resultat-list.component.html', // ✅ lien vers fichier
  styleUrls: ['./resultat-list.component.css']
})
export class ResultatListComponent implements OnInit {
  resultats: Resultat[] = [];
  page: number = 0;
  size: number = 10;

  constructor(private resultatService: ResultatService) {}

  ngOnInit(): void {
    this.loadResultats();
  }

  loadResultats(): void {
    this.resultatService.getAll(this.page, this.size).subscribe({
      next: (res: any) => {
        this.resultats = res?.content ?? res;
      },
      error: err => console.error('Erreur lors du chargement des résultats', err)
    });
  }
}
