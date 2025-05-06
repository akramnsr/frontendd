import { Component, OnInit }       from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormationService }        from '../../services/formation.service';
import { Formation }               from '../../models/formation.model';

@Component({
  selector: 'app-formation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {
  formationForm!: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: FormationService
  ) {}

  ngOnInit(): void {
    this.formationForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', Validators.required]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      const id = Number(idParam);
      this.service.get(id).subscribe(dto => {
        this.formationForm.patchValue(dto);
      });
    }
  }

  onSubmit(): void {
    if (this.formationForm.invalid) return;
    const formValue: Formation = { ...this.formationForm.value };
    if (this.isEdit) {
      formValue.id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.update(formValue).subscribe(() => this.router.navigate(['/formations']));
    } else {
      this.service.create(formValue).subscribe(() => this.router.navigate(['/formations']));
    }
  }

  cancel(): void {
    this.router.navigate(['/formations']);
  }
}
