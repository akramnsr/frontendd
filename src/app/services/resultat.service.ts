import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultat } from '../models/resultat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private apiUrl = 'api/resultats';

  constructor(private http: HttpClient) {}

  getAll(page: number, size: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  getById(id: number): Observable<Resultat> {
    return this.http.get<Resultat>(`${this.apiUrl}/${id}`);
  }

  create(resultat: Resultat): Observable<Resultat> {
    return this.http.post<Resultat>(this.apiUrl, resultat);
  }

  update(id: number, resultat: Resultat): Observable<Resultat> {
    return this.http.put<Resultat>(`${this.apiUrl}/${id}`, resultat);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
