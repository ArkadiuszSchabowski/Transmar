import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../_services/user-service';
import { RegisterDto } from '../../models/register-dto';

@Component({
  selector: 'app-register',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  hidePassword = signal(true);
  hideRepeatPassword = signal(true);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private userService = inject(UserService);
  private router = inject(Router);

  form: any = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
  });

  changePasswordVisibility(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  changeRepeatPasswordVisibility(event: MouseEvent) {
    this.hideRepeatPassword.set(!this.hideRepeatPassword());
    event.stopPropagation();
  }

  register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let dto: RegisterDto = {
      name: this.form.get('name').value,
      password: this.form.get('password').value,
      repeatPassword: this.form.get('repeatPassword').value,
    };

    this.userService.register(dto).subscribe({
      next: () => {
        window.scrollTo(0, 0);
        this.toastr.success('Registered successfully.');
        this.router.navigateByUrl('');
      },
      error: (error) => {
        console.log(error);
        if (error.status === 400) {
          this.toastr.error(error.error.message);
        }
        if (error.status === 500) {
          this.toastr.error('Server error.');
        }
      },
    });
  }
}
