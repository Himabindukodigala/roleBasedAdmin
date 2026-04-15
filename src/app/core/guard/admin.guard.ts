import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserRole } from '../../Models/user.moder';

export const adminGuard = () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.currentUser();

  if (user?.role === UserRole.Admin) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
