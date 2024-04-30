import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentTableComponent } from './update-payment-table.component';

describe('UpdatePaymentTableComponent', () => {
  let component: UpdatePaymentTableComponent;
  let fixture: ComponentFixture<UpdatePaymentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePaymentTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePaymentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
