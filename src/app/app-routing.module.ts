import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { FormationDetailComponent } from './components/formation-detail/formation-detail.component';
import { FormationFormComponent } from './components/formation-form/formation-form.component';

const routes: Routes = [
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/new', component: FormationFormComponent },
  { path: 'formations/:id', component: FormationDetailComponent },
  { path: 'formations/:id/edit', component: FormationFormComponent },
  { path: '', redirectTo: '/formations', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
