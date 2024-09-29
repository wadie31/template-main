import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITransaction } from 'src/app/core/type/transaction';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.scss'],
})
export class DetailTransactionComponent {
  @Input() visible = false;
  @Input() transaction!: ITransaction;
  @Output() close: EventEmitter<void> = new EventEmitter();

  onClose(): void {
    this.close.emit();
  }
}
