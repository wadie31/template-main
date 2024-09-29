import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize, forkJoin } from 'rxjs';
import { AccountsService } from 'src/app/core/service/accounts/accounts.service';
import { PaymentMethodsService } from 'src/app/core/service/paymentMethods/payment-methods.service';
import { TransactionService } from 'src/app/core/service/transaction/transaction.service';
import { IAccount, IPaymentMethod } from 'src/app/core/type/transaction';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  @Input() visible = false;
  @Output() close: EventEmitter<void> = new EventEmitter();
  paymentMethods: IPaymentMethod[] = [];
  accounts: IAccount[] = [];
  isLoading: boolean = true;
  addForm: FormGroup<any> = this.fb.group({
    amount: ['', [Validators.required]],
    currency: ['', [Validators.required]],
    transactionDate: ['', [Validators.required]],
    description: ['', [Validators.required]],
    account: ['', [Validators.required]],
    paymentMethod: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.addForm.valid) {
      const request = this.addForm.value;
      this.transactionService
        .add({
          ...request,
          transactionDate: moment(request.transactionDate).format('yyyy-MM-DD'),
        })
        .subscribe({
          next: () => {
            this.message.success(`transaction created successfully`);
            this.onClose();
          },
          error: (err) => {
            this.message.error(`transaction creation failed`);
          },
        });
    } else {
      Object.values(this.addForm.controls).forEach((control) => {
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
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    forkJoin({
      accounts: this.accountsService.findAll(),
      paymentMethods: this.paymentMethodsService.findAll(),
    })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: ({ accounts, paymentMethods }) => {
          this.accounts = accounts;
          this.paymentMethods = paymentMethods;
        },
        error: (err) => {
          console.error('Error loading data', err);
          this.isLoading = false;
        },
      });
  }
}
