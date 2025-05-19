import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizFull, Question, Choice } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { ResultatService } from '../../services/resultat.service';

@Component({
  selector: 'app-quiz-detail',
  standalone: true,
  imports: [CommonModule], // Ajoute ça !
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  quiz?: QuizFull;
  current = 0;
  answers: number[] = []; // indices des choix cochés (par question)
  validated = false;
  score = 0;


  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private resultatService: ResultatService // Ajoute-le ici
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quizService.getFullQuiz(id).subscribe(qz => {
      this.quiz = qz;
      this.answers = new Array(qz.questions.length).fill(-1);
    });
  }

  previous() { if (this.current > 0) this.current--; }
  next() { if (this.quiz && this.current < this.quiz.questions.length - 1) this.current++; }

  selectAnswer(qIndex: number, cIndex: number) {
    this.answers[qIndex] = cIndex;
  }

  validate() {
    this.validated = true;
    this.score = 0;
    if (!this.quiz) return;
    this.quiz.questions.forEach((q, i) => {
      const answerIndex = this.answers[i];
      if (answerIndex !== -1 && q.choices[answerIndex].correct) this.score++;
    });

    // Envoie le résultat au backend :
    this.resultatService.submitResult({
      quizId: this.quiz.id,
      score: this.score
    }).subscribe({
      next: r => {
        // Optionnel : Message, redirection, ou recharge de la liste des résultats
        console.log('Résultat enregistré', r);
      },
      error: err => {
        // Optionnel : Gestion d’erreur utilisateur
        console.error('Erreur lors de la soumission du résultat', err);
      }
    });
  }


  reset() {
    this.validated = false;
    this.score = 0;
    this.answers = this.quiz ? new Array(this.quiz.questions.length).fill(-1) : [];
    this.current = 0;
  }
}
