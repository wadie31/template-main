import { Component } from '@angular/core';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of } from 'rxjs';
import { TransactionService } from 'src/app/core/service/transaction/transaction.service';
import { ITransaction } from 'src/app/core/type/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  data: ITransaction[] = [];
  isLoading: boolean = true;
  isDetailOpen: boolean = false;
  isAddOpen: boolean = false;
  isEditOpen: boolean = false;
  transactionSelected: ITransaction | null = null;

  constructor(
    private transactionService: TransactionService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.transactionService.findAll().subscribe((transactions) => {
      this.data = transactions;
      this.isLoading = false;
    });
  }

  onAdd(isAddOpen: boolean, isRefresh: boolean = false) {
    this.isAddOpen = isAddOpen;
    if (isRefresh) {
      this.getData();
    }
  }

  onDelete($event: ITransaction) {
    this.isLoading = true;
    this.transactionService.delete($event.id).subscribe({
      next: () => {
        this.getData();
        this.message.success(`transaction deleted successfully`);
      },
      error: () => {
        this.message.error(`transaction delete failed`);
        this.isLoading = false;
      },
    });
  }

  onEdit($event: ITransaction) {
    this.isEditOpen = true;
    this.transactionSelected = $event;
  }

  closeEdit() {
    this.isEditOpen = false;
    this.transactionSelected = null;
    this.getData();
  }

  onDetail(isDetailOpen: boolean, $event: ITransaction | null = null) {
    this.isDetailOpen = isDetailOpen;
    this.transactionSelected = $event;
  }

  onSearch($event: any) {
    this.isLoading = true;
    const request = {
      status: $event.status,
      transactionId: $event.transactionId,
      dateDebut: $event.dateRange[0]
        ? moment($event.dateRange[0]).format('yyyy-MM-DD')
        : null,
      dateFin: $event.dateRange[1]
        ? moment($event.dateRange[1]).format('yyyy-MM-DD')
        : null,
    };
    this.transactionService.findAllWithQuery(request).subscribe({
      next: (transactions) => {
        this.data = transactions;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
