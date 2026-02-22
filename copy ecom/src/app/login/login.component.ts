import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(): void {
    const isValid = this.authService.login(this.email, this.password);
    if (!isValid) {
      this.errorMessage = 'Enter a valid email and password (minimum 4 characters).';
      return;
    }

    this.errorMessage = '';
    this.router.navigateByUrl('/home');
  }
}
