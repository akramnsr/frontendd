// src/app/components/quiz/quiz-detail/quiz-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz-detail.component.html',
})
export class QuizDetailComponent implements OnInit {
  quiz?: Quiz;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quizService.getOne(id).subscribe(q => this.quiz = q);
  }
}
