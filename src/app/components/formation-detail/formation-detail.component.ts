import { Component, OnInit }          from '@angular/core';
import { CommonModule }               from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormationService }           from '../../services/formation.service';
import { Formation }                  from '../../models/formation.model';

@Component({
  selector: 'app-formation-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  formation?: Formation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FormationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe(dto => this.formation = dto);
  }

  back(): void {
    this.router.navigate(['/formations']);
  }

  edit(): void {
    this.router.navigate(['/formations', this.formation!.id, 'edit']);
  }
}
