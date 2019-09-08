import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMoneyComponent } from './get-money.component';

describe('GetMoneyComponent', () => {
  let component: GetMoneyComponent;
  let fixture: ComponentFixture<GetMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
