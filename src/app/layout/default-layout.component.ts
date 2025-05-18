import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/common/navbar.component';
import { FooterComponent } from '../components/common/footer.component';
@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
    templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {}
