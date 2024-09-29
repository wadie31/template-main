import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize, forkJoin } from 'rxjs';
import { AccountsService } from 'src/app/core/service/accounts/accounts.service';
import { PaymentMethodsService } from 'src/app/core/service/paymentMethods/payment-methods.service';
import { TransactionService } from 'src/app/core/service/transaction/transaction.service';
import {
  IAccount,
  IPaymentMethod,
  ITransaction,
} from 'src/app/core/type/transaction';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss'],
})
export class EditTransactionComponent {
  @Input() visible = false;
  @Input() transaction!: ITransaction;
  @Output() close: EventEmitter<void> = new EventEmitter();
  paymentMethods: IPaymentMethod[] = [];
  accounts: IAccount[] = [];
  isLoading: boolean = true;
  editForm: FormGroup<any> = this.fb.group({
    amount: ['', [Validators.required]],
    currency: ['', [Validators.required]],
    transactionDate: ['', [Validators.required]],
    description: ['', [Validators.required]],
    account: ['', [Validators.required]],
    paymentMethod: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.editForm.valid) {
      const request = this.editForm.value;
      this.transactionService
        .edit(
          {
            ...request,
            transactionDate: moment(request.transactionDate).format(
              'yyyy-MM-DD'
            ),
          },
          this.transaction.id
        )
        .subscribe({
          next: () => {
            this.message.success(`transaction edited successfully`);
            this.onClose();
          },
          error: (err) => {
            this.message.error(`transaction edited failed`);
          },
        });
    } else {
      Object.values(this.editForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  onClose(): void {
    this.close.emit();
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private paymentMethodsService: PaymentMethodsService,
    private accountsService: AccountsService,
    private transactionService: TransactionService,
    private message: NzMessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    forkJoin({
      accounts: this.accountsService.findAll(),
      paymentMethods: this.paymentMethodsService.findAll(),
    })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: ({ accounts, paymentMethods }) => {
          this.accounts = accounts;
          this.paymentMethods = paymentMethods;

          const selectedAccount = this.accounts.find(
            (a) => a.id === this.transaction.account.id
          );
          const selectedPaymentMethod = this.paymentMethods.find(
            (pm) => pm.id === this.transaction.paymentMethod.id
          );

          this.editForm.setValue({
            amount: this.transaction.amount,
            currency: this.transaction.currency,
            transactionDate: this.transaction.transactionDate,
            description: this.transaction.description,
            account: selectedAccount,
            paymentMethod: selectedPaymentMethod,
          });

          this.cdr.markForCheck();
        },
        error: (err) => {
          console.error('Error loading data', err);
          this.isLoading = false;
        },
      });
  }
}
