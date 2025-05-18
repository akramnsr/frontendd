import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormationService, FormationPage } from '../../services/formation.service';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
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
