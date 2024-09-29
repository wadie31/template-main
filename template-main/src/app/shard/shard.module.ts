import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse/collapse.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgForOf } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  declarations: [CollapseComponent],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzGridModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NgForOf,
    NzDropDownModule,
    NzIconModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzSelectModule,
    NzSpinModule,
    NzDatePickerModule,
  ],
  exports: [
    CollapseComponent,
    NzCollapseModule,
    NzGridModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NgForOf,
    NzDropDownModule,
    NzIconModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzSelectModule,
    NzSpinModule,
    NzDatePickerModule,
  ],
  providers: [NzModalService],
})
export class ShardModule {}
