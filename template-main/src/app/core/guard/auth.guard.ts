import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { JwtTokenService } from '../jwt/jwt-token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const jwt = inject(JwtTokenService);

  return route.data['role'] === jwt.getAuthority();
};
