import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Formation, Video } from '../../models/formation.model';

@Component({
  selector: 'app-formation-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation-videos.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationVideosComponent implements OnInit {
  formation?: Formation;
  videos: Video[] = [];

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formationService.getFormation(id).subscribe(formation => {
      this.formation = formation;
      this.videos = formation.videos || [];
    });
  }
  currentVideoIndex = 0;

  previousVideo() {
    if (this.currentVideoIndex > 0) this.currentVideoIndex--;
  }

  nextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) this.currentVideoIndex++;
  }

}
