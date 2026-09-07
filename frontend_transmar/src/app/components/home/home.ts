import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDto } from '../../models/login-dto';
import { UserService } from '../../_services/user-service';
import { ToastrService } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  hidePassword = signal(true);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private userService = inject(UserService);
  private router = inject(Router);

  form: any = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  changePasswordVisibility(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    window.scrollTo(0, 0);

    const dto: LoginDto = {
      name: this.form.get('name')?.value,
      password: this.form.get('password')?.value,
    };

    this.userService.login(dto).subscribe({
      next: () => {
        this.toastr.success('Logged in successfully.');
        this.router.navigateByUrl('dashboard');
      },
      error: (error) => {
        if (error.status === 401) {
          this.toastr.error(error.error.message);
        }
        if (error.status === 500) {
          this.toastr.error('Server error.');
        }
      },
    });
  }
}
