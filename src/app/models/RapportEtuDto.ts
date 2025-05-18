export interface RapportEtuDto {
  etudiant: string;
  module: string;
  score: number; // ← ici en nombre
  date: Date;    // ← ici en vrai Date
}
