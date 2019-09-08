import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenOrdersPage } from './taken-orders.page';

describe('TakenOrdersComponent', () => {
  let component: TakenOrdersPage;
  let fixture: ComponentFixture<TakenOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenOrdersPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
