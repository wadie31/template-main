import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface RouteInfo {
  title: string;
  icon: string;
  link: string;
}
export const ROUTES: RouteInfo[] = [
  {
    title: 'Transaction',
    icon: 'right-square',
    link: '/transaction',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuData(): Observable<RouteInfo[]> {
    return of(ROUTES);
  }
}
