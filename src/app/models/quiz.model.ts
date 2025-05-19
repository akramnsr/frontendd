export interface Choice {
  id: number;
  texte: string;
  correct?: boolean; // ne jamais afficher cette prop avant la correction !
}

export interface Question {
  id: number;
  libelle: string;
  choices: Choice[];
}

export interface QuizFull {
  id: number;
  titre: string;
  description: string;
  imageUrl?: string;
  formation?: { id: number, titre: string };
  nbQuestions?: number;
  duree?: number;
  dateInscription?: string;
  questions: Question[];
}
  export interface Quiz {
  id: number;
  titre: string;
  description: string;
  imageUrl?: string;
  formation?: { id: number, titre: string };

}
