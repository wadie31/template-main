import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-rechercher-transaction',
  templateUrl: './rechercher-transaction.component.html',
  styleUrls: ['./rechercher-transaction.component.scss'],
})
export class RechercherTransactionComponent {
  @Output() search: EventEmitter<any> = new EventEmitter();

  searchForm: FormGroup<any> = this.fb.group({
    transactionId: [''],
    dateRange: [[]],
    status: [''],
  });

  submitForm(): void {
    const formValues = this.searchForm.value;
    const hasValue = Object.values(formValues).some(
      (value) => value !== null && value !== ''
    );
    if (hasValue) {
      this.search.emit(formValues);
    } else {
      this.message.warning('Please fill at least one field!');
    }
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private message: NzMessageService
  ) {}
}
