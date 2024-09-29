import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableTransactionComponent } from './datatable-transaction.component';

describe('DatatableTransactionComponent', () => {
  let component: DatatableTransactionComponent;
  let fixture: ComponentFixture<DatatableTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableTransactionComponent]
    });
    fixture = TestBed.createComponent(DatatableTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
