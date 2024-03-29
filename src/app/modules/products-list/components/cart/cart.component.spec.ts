import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInProductsComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartInProductsComponent;
  let fixture: ComponentFixture<CartInProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartInProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartInProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
