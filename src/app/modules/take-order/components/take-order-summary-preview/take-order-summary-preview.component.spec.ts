import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOrderSummaryPreviewComponent } from './take-order-summary-preview.component';

describe('TakeOrderSummaryPreviewComponent', () => {
  let component: TakeOrderSummaryPreviewComponent;
  let fixture: ComponentFixture<TakeOrderSummaryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOrderSummaryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOrderSummaryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
