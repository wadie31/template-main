import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {RouterLink, RouterOutlet} from "@angular/router";
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { MenuComponent } from './pages-layout/menu/menu.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzFormModule} from "ng-zorro-antd/form";


@NgModule({
  declarations: [
    PagesLayoutComponent,
    BasicLayoutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterLink,
    RouterOutlet,
    NzDropDownModule,
    NzFormModule
  ],
  exports: [
    PagesLayoutComponent,
    BasicLayoutComponent
  ],
})
export class LayoutModule { }
