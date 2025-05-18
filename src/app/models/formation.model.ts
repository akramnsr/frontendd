export interface Formation {
  id: number;
  titre: string;
  description: string;
  dureeHeures: number;
  niveau?: string;          // si présent en base
  imageUrl?: string;        // pour la photo de couverture
  videoUrl?: string;        // pour la vidéo de la formation
}
