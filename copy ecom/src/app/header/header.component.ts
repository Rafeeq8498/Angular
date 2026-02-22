import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchTerm = '';

  constructor(
    public readonly authService: AuthService,
    public readonly storeService: StoreService,
    private readonly router: Router
  ) {}

  onSearch(): void {
    this.storeService.setSearchTerm(this.searchTerm);
    this.router.navigateByUrl('/home');
  }

  onLogout(): void {
    this.authService.logout();
    this.storeService.setSearchTerm('');
    this.searchTerm = '';
    this.router.navigateByUrl('/login');
  }
}
