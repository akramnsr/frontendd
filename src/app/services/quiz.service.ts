import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
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
}
