import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout.component';
import { HomeComponent } from './home/home.component';
import { FormationListComponent } from './components/formations/formation-list.component';
import { RapportEtuListComponent } from './components/rapport/rapport-etu-list.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoginComponent } from './components/auth/login/login.component';
import { QuizListComponent } from './components/quiz/quiz-list.component';
import { QuizDetailComponent } from './components/quiz/quiz-detail.component';
import { ResultatListComponent } from './components/resultat/resultat-list.component';
import { ResultatDetailComponent } from './components/resultat/resultat-detail.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // Home par défaut
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      // Toutes les pages protégées
      { path: 'formations', component: FormationListComponent, canActivate: [authGuard] },
      { path: 'rapports', component: RapportEtuListComponent, canActivate: [authGuard] },
      { path: 'profil', component: ProfilComponent, canActivate: [authGuard] },
      { path: 'quizzes', component: QuizListComponent, canActivate: [authGuard] },
      { path: 'quizzes/:id', component: QuizDetailComponent, canActivate: [authGuard] },
      { path: 'resultats', component: ResultatListComponent, canActivate: [authGuard] },
      { path: 'resultats/:id', component: ResultatDetailComponent, canActivate: [authGuard] },
    ]
  },
  { path: '**', redirectTo: '' }
];
