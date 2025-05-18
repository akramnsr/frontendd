import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RapportEtu } from '../models/rapport-etu.model';

@Injectable({
  providedIn: 'root',
})
export class RapportEtuService {
  private apiUrl = '/api/rapports';

  constructor(private http: HttpClient) {}

  getRapports(page: number, size: number): Observable<{ content: RapportEtu[]; totalElements: number }> {
    return this.http.get<{ content: RapportEtu[]; totalElements: number }>(
      `${this.apiUrl}?page=${page}&size=${size}`
    );
  }

  getRapport(id: number): Observable<RapportEtu> {
    return this.http.get<RapportEtu>(`${this.apiUrl}/${id}`);
  }
}
