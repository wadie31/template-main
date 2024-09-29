import {Component, Input} from '@angular/core';
import {MenuService, RouteInfo} from "../../../core/service/menu/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() isCollapsed = false;
  menus: RouteInfo[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getMenuData().subscribe((menus) => {
      this.menus = menus;
    });
  }

}
