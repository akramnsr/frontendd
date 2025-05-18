import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, UserDto } from '../../services/user.service';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: UserDto | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = 1; // à remplacer plus tard par un ID dynamique
    this.userService.getUserById(userId).subscribe({
      next: (data: UserDto) => this.user = data,
      error: (err: any) => console.error('Erreur chargement profil', err)
    });
  }

  get firstLetter(): string {
    return this.user?.prenom?.charAt(0) ?? '';
  }
}
