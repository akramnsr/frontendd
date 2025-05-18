import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { RapportEtuService } from '../../services/rapport-etu.service';
import { RapportEtu } from '../../models/rapport-etu.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-rapport-etu-detail',
  templateUrl: './rapport-etu-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class RapportEtuDetailComponent implements OnInit {
  rapport?: RapportEtu;

  constructor(
    private route: ActivatedRoute,
    private rapportService: RapportEtuService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rapportService.getRapport(id).subscribe(data => this.rapport = data);
  }
}
