import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../Models/auth.model';
import { UserRole } from '../../Models/user.moder';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  errorMessage = '';
  form: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      emailOrUsername: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
  if (this.form.invalid) return;

  this.authService.login(this.form.value).subscribe({
    next: (res) => {

      // Role check
      if (res.user.role === UserRole.Admin) {
        this.router.navigate(['/admin/products']); 
      } else {
        this.router.navigate(['/']); 
      }

    },
    error: () => this.errorMessage = 'Invalid login credentials'
  });
}

}
