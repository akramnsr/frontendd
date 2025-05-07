// src/app/app.routes.ts
import { Route } from '@angular/router';
import { FormationListComponent } from './components/formations/formation-list.component';
import { FormationDetailComponent } from './components/formations/formation-detail.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'formations', pathMatch: 'full' },
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/:id', component: FormationDetailComponent }
];
