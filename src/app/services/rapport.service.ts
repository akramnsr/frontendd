import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rapport } from '../models/rapport.model'; // ✅ chemin correct si ton modèle est bien dans models/

@Injectable({ providedIn: 'root' })
export class RapportService {
  private readonly apiUrl = '/api/rapports'; // ✅ readonly = bonne pratique

  constructor(private http: HttpClient) {}

  // 🔍 Obtenir tous les rapports
  list(): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(this.apiUrl);
  }

  // 🔍 Obtenir un rapport par ID
  getOne(id: number): Observable<Rapport> {
    return this.http.get<Rapport>(`${this.apiUrl}/${id}`);
  }

  // ➕ Créer un nouveau rapport
  create(data: Rapport): Observable<Rapport> {
    return this.http.post<Rapport>(this.apiUrl, data);
  }

  // ✏️ Mettre à jour un rapport existant
  update(id: number, data: Rapport): Observable<Rapport> {
    return this.http.put<Rapport>(`${this.apiUrl}/${id}`, data);
  }

  // ❌ Supprimer un rapport
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
