import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenOrderListPreviewComponent } from './taken-order-list-preview.component';

describe('TakenOrderListPreviewComponent', () => {
  let component: TakenOrderListPreviewComponent;
  let fixture: ComponentFixture<TakenOrderListPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenOrderListPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenOrderListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
