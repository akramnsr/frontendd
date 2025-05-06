import { Component, OnInit }      from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule }           from '@angular/router';
import { FormationService }       from '../../services/formation.service';
import { Formation }              from '../../models/formation.model';
import { Page }                   from '../../models/page.model';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  pageData: Page<Formation> = {
    content: [], totalElements: 0, totalPages: 0, number: 0, size: 10
  };

  constructor(private service: FormationService) {}

  ngOnInit(): void {
    this.loadPage(0);
  }

  loadPage(page: number): void {
    this.service.list(page, this.pageData.size)
      .subscribe(data => this.pageData = data);
  }

  delete(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette formation ?')) {
      this.service.delete(id)
        .subscribe(() => this.loadPage(this.pageData.number));
    }
  }
}
