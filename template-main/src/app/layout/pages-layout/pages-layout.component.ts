import { Component } from '@angular/core';
import { JwtTokenService } from '../../core/jwt/jwt-token.service';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss'],
})
export class PagesLayoutComponent {
  isCollapsed = false;

  constructor(private jwt: JwtTokenService) {}

  async logout() {
    await this.jwt.logout();
  }
}
