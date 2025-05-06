import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model';
import { Page } from '../models/page.model';

@Injectable({ providedIn: 'root' })
export class FormationService {
  private baseUrl = '/api/formations';

  constructor(private http: HttpClient) {}

  list(page: number = 0, size: number = 10): Observable<Page<Formation>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<Page<Formation>>(this.baseUrl, { params });
  }

  get(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.baseUrl}/${id}`);
  }

  create(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.baseUrl, formation);
  }

  update(formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(`${this.baseUrl}/${formation.id}`, formation);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
