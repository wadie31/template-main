import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ITransaction } from 'src/app/core/type/transaction';

@Component({
  selector: 'app-datatable-transaction',
  templateUrl: './datatable-transaction.component.html',
  styleUrls: ['./datatable-transaction.component.scss'],
})
export class DatatableTransactionComponent {
  @Input() data: ITransaction[] = [];
  @Input() totalElement: number = 0;
  @Input() isLoading: boolean = false;

  @Output() detail: EventEmitter<ITransaction> = new EventEmitter();
  @Output() edit: EventEmitter<ITransaction> = new EventEmitter();
  @Output() delete: EventEmitter<ITransaction> = new EventEmitter();

  constructor(private modalService: NzModalService) {}

  onDetail(transaction: ITransaction) {
    this.detail.emit(transaction);
  }

  onEdit(transaction: ITransaction) {
    this.edit.emit(transaction);
  }

  onDelete(transaction: ITransaction) {
    this.delete.emit(transaction);
  }

  confirmDelete(transaction: ITransaction) {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to delete?',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOkText: 'Delete',
      nzOnOk: () => this.onDelete(transaction),
      nzCancelText: 'Cancel',
    });
  }
}
