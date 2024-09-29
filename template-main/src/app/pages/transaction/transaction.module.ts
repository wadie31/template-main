import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { ShardModule } from 'src/app/shard/shard.module';
import { DatatableTransactionComponent } from './datatable-transaction/datatable-transaction.component';
import { RechercherTransactionComponent } from './rechercher-transaction/rechercher-transaction.component';
import { DetailTransactionComponent } from './detail-transaction/detail-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';

@NgModule({
  declarations: [TransactionComponent, DatatableTransactionComponent, RechercherTransactionComponent, DetailTransactionComponent, AddTransactionComponent, EditTransactionComponent],
  imports: [CommonModule, TransactionRoutingModule, ShardModule],
})
export class TransactionModule {}
