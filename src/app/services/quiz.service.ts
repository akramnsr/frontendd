import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Quiz, QuizFull} from '../models/quiz.model';
import { Page } from '../models/page.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private apiUrl = '/api/quizzes';

  constructor(private http: HttpClient) {}

  list(page: number = 0, size: number = 10): Observable<Page<Quiz>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<Page<Quiz>>(this.apiUrl, { params });
  }

  getOne(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${id}`);
  }

  // quiz.service.ts
  getFullQuiz(id: number): Observable<QuizFull> {
    return this.http.get<QuizFull>(`${this.apiUrl}/${id}/full`);
  }

  getMyQuizzes() {
    return this.http.get<Quiz[]>('/api/quizzes/mine');
  }
// quiz.service.ts
  getQuizzesByFormation(formationId: number) {
    return this.http.get<Quiz[]>(`/api/quizzes?formationId=${formationId}`);
  }
  listByFormation(formationId: number) {
    // Supposons que ton backend supporte /api/quizzes?formationId=...
    return this.http.get<Quiz[]>(`/api/quizzes?formationId=${formationId}`);
  }

}
