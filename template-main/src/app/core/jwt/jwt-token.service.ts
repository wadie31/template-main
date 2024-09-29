import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { IUser } from '../type/user';

@Injectable({
  providedIn: 'root',
})
export class JwtTokenService {
  private localStorageToken: string = 'ACCESS_TOKEN';

  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  getLocalStorageItem(key: string): string {
    return <string>localStorage.getItem(key);
  }

  setLocalStorageItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getToken(): string {
    return this.getLocalStorageItem(this.localStorageToken);
  }

  getUser(): IUser {
    return this.decoded(this.getToken()).user as IUser;
  }

  getAuthority(): string {
    return this.decoded(this.getToken()).role as string;
  }

  isTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired(this.getToken());
  }

  private decoded(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }

  async logout() {
    localStorage.removeItem(this.localStorageToken);
    await this.router.navigate(['login']);
  }
}
