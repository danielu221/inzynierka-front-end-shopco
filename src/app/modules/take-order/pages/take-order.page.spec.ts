import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOrderPage as TakeOrderPage } from './take-order.page';

describe('TakeOrderPage', () => {
  let component: TakeOrderPage;
  let fixture: ComponentFixture<TakeOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOrderPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
