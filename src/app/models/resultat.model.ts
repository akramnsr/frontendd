export interface Resultat {
  id: number;
  score: number;
  datePassage?: string;
  statut?: string;
  etudiant?: { nom: string, prenom: string };
  quiz?: { titre: string };
}
