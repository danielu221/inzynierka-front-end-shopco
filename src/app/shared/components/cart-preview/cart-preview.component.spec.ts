import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPreviewComponentShared } from './cart-preview.component';

describe('CartPreviewComponent', () => {
  let component: CartPreviewComponentShared;
  let fixture: ComponentFixture<CartPreviewComponentShared>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPreviewComponentShared ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPreviewComponentShared);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
