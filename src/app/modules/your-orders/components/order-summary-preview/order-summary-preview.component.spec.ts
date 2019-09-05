import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryPreviewComponent } from './order-summary-preview.component';

describe('OrderSummaryPreviewComponent', () => {
  let component: OrderSummaryPreviewComponent;
  let fixture: ComponentFixture<OrderSummaryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSummaryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
