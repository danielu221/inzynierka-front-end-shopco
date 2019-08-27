import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsPage } from './carts.routing';

describe('CartsPage', () => {
  let component: CartsPage;
  let fixture: ComponentFixture<CartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
