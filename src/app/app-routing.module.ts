import {RouterModule, Routes} from '@angular/router';
import { FormationListComponent } from './components/formations/formation-list.component';
import { FormationDetailComponent } from './components/formations/formation-detail.component';
import { RapportEtuListComponent } from './components/rapport/rapport-etu-list.component';
import { RapportEtuDetailComponent } from './components/rapport/rapport-etu-detail.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import {NgModule} from '@angular/core';
import {ResultatListComponent} from './components/resultat/resultat-list.component';
import {ResultatDetailComponent} from './components/resultat/resultat-detail.component';

export const routes: Routes = [
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/:id', component: FormationDetailComponent },
  { path: 'rapports', component: RapportEtuListComponent },
  { path: 'rapports/:id', component: RapportEtuDetailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resultats', component: ResultatListComponent },
  { path: 'resultats/:id', component: ResultatDetailComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
