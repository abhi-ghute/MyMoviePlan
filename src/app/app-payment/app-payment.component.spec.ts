import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaymentComponent } from './app-payment.component';

describe('AppPaymentComponent', () => {
  let component: AppPaymentComponent;
  let fixture: ComponentFixture<AppPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
