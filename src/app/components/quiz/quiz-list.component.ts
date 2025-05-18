// src/app/components/quiz/quiz-list/quiz-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbPaginationModule],
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'] // ← AJOUTE CETTE LIGNE
})

export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];
  page = 0;
  size = 10;
  totalPages = 0;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this.quizService.list(this.page, this.size).subscribe({
      next: page => {
        console.log('🎯 API response quiz:', page);
        this.quizzes = page.content;
        this.totalPages = page.totalPages;
      },
      error: err => console.error('❌ Quiz API error', err)
    });
  }


  pageChange(newPage: number) {
    this.page = newPage - 1;
    this.loadPage();
  }
}
