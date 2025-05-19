export interface Video {
  id: number;
  filename: string;
  url: string;
}

export interface Formation {
  id: number;
  titre: string;
  description: string;
  dureeHeures: number;
  niveau?: string;
  imageUrl?: string;
  videos?: Video[];   // <--- Ajoute ceci !
}
