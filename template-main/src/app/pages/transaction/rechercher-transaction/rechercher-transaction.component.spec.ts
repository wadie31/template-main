import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherTransactionComponent } from './rechercher-transaction.component';

describe('RechercherTransactionComponent', () => {
  let component: RechercherTransactionComponent;
  let fixture: ComponentFixture<RechercherTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercherTransactionComponent]
    });
    fixture = TestBed.createComponent(RechercherTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
