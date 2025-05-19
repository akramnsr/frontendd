import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../models/formation.model';

@Component({
  selector: 'app-formation-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  formation!: Formation;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formationService.getFormation(id).subscribe(data => {
      this.formation = data;
      if (!this.formation.videos) {
        this.formation.videos = []; // Si pas de vidéos, on assigne un tableau vide
      }
    });
  }
  currentVideoIndex = 0;

  previousVideo() {
    if (this.currentVideoIndex > 0) this.currentVideoIndex--;
  }

  nextVideo() {
    if (this.formation?.videos && this.currentVideoIndex < this.formation.videos.length - 1)
      this.currentVideoIndex++;
  }



}
