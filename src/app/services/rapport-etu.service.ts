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

  // 🔑 Renvoie UNIQUEMENT les rapports de l’étudiant connecté
  getMesRapports(): Observable<RapportEtu[]> {
    return this.http.get<RapportEtu[]>(`${this.apiUrl}/me`);
  }

  // 🔍 Pour un rapport précis
  getRapport(id: number): Observable<RapportEtu> {
    return this.http.get<RapportEtu>(`${this.apiUrl}/${id}`);
  }
}
