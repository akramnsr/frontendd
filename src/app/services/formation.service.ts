import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model';

export interface FormationPage {
  content: Formation[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = '/api/formations';

  constructor(private http: HttpClient) {}

  getFormations(page: number = 0, size: number = 5): Observable<FormationPage> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<FormationPage>(this.apiUrl, { params });
  }

  getFormation(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }
}
