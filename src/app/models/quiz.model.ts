export interface Quiz {
  id: number;
  titre: string;
  description: string;
  imageUrl?: string;
  formation?: { id: number, titre: string };
  nbQuestions?: number;
  duree?: number; // durée en minutes
  dateInscription?: string; // format ISO
}
