import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { QuizService } from '../../services/quiz.service';
import { Formation, Video } from '../../models/formation.model';
import { Quiz } from '../../models/quiz.model';

@Component({
  selector: 'app-formation-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation-videos.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationVideosComponent implements OnInit {
  formation?: Formation;
  videos: Video[] = [];
  currentVideoIndex = 0;
  quizzes: Quiz[] = [];

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // 1️⃣ Inscrit l'utilisateur à la formation
    this.formationService.commencerFormation(id).subscribe(() => {
      // 2️⃣ Ensuite charge la formation pour afficher les vidéos
      this.formationService.getFormation(id).subscribe(data => {
        this.formation = data;
        this.videos = data.videos ?? [];
      });
      // 3️⃣ Charge les quiz de la formation
      this.quizService.getQuizzesByFormation(id).subscribe(quizzes => {
        this.quizzes = quizzes;
      });
    });
  }
  loadQuizzes(formationId: number) {
    this.quizService.listByFormation(formationId).subscribe({
      next: (data) => {
        console.log('Quiz récupérés pour formation', formationId, data);
        this.quizzes = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des quiz', err);
        this.quizzes = [];
      }
    });
  }

  previousVideo() {
    if (this.currentVideoIndex > 0) this.currentVideoIndex--;
  }

  nextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) this.currentVideoIndex++;
  }

  goToQuiz(quizId: number) {
    this.router.navigate(['/quizzes', quizId]);
  }
}
