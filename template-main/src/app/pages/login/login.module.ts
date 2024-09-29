import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCardModule} from "ng-zorro-antd/card";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule
  ]
})
export class LoginModule { }
