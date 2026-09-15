import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../_services/auth-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, MatIconModule, MatButtonModule, MatToolbarModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);
  public authService = inject(AuthService);

  logout() {
    this.router.navigateByUrl('/login');
    this.authService.logout();
  }
}
