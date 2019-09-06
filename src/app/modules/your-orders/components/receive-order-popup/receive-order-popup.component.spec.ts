import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOrderPopupComponent } from './receive-order-popup.component';

describe('ReceiveOrderPopupComponent', () => {
  let component: ReceiveOrderPopupComponent;
  let fixture: ComponentFixture<ReceiveOrderPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveOrderPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveOrderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
