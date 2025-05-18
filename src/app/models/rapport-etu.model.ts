export interface RapportEtu {
  id: number;
  formation?: { titre: string };  // Si tu veux afficher le module ou formation
  etudiant?: { nom: string; prenom: string }; // Affichage "nom prénom"
  score?: number; // Si tu veux afficher le score
  dateSoumission?: string; // Affichage de la date
  commentaire?: string;     // Commentaire étudiant
  commentaireFormateur?: string; // Optionnel
  contenu?: string;              // Si tu veux afficher le contenu du rapport
}
