import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RapportEtuService } from '../../services/rapport-etu.service';
import { RapportEtu } from '../../models/rapport-etu.model';
import { CommonModule, NgIf, SlicePipe } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-rapport-etu-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIf, SlicePipe],
  templateUrl: './rapport-etu-list.component.html',
  styleUrls: ['./rapport-etu-list.component.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ])
    ]),
    trigger('staggerIn', [
      transition(':enter', [
        query('.fade-item', [
          style({ opacity: 0, transform: 'translateY(10px)' }),
          stagger(100, animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ])
      ])
    ])
  ]
})
export class RapportEtuListComponent implements OnInit {
  rapports: RapportEtu[] = [];
  page = 0;
  showRapport = true;

  constructor(private rapportService: RapportEtuService) {}

  ngOnInit(): void {
    this.rapportService.getRapports(0, 100).subscribe(data => {
      this.rapports = data.content;
    });
  }

  get currentRapport(): RapportEtu | null {
    return this.rapports[this.page] || null;
  }

  nextRapport() {
    if (this.page + 1 < this.rapports.length) {
      this.triggerAnimation(() => this.page++);
    }
  }

  prevRapport() {
    if (this.page > 0) {
      this.triggerAnimation(() => this.page--);
    }
  }

  private triggerAnimation(callback: () => void) {
    this.showRapport = false;
    setTimeout(() => {
      callback();
      this.showRapport = true;
    }, 0); // force un nouveau cycle de DOM
  }
}
