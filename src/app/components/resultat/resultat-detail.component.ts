import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResultatService } from '../../services/resultat.service';
import { Resultat } from '../../models/resultat.model';

@Component({
  selector: 'app-resultat-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resultat-detail.component.html',  // ✅ Utilise le template EXTERNE
  styleUrls: ['./resultat-detail.component.css']
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
