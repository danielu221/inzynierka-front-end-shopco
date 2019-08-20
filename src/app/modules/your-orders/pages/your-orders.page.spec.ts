import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrdersPage } from './your-orders.page';

describe('YourOrdersPage', () => {
  let component: YourOrdersPage;
  let fixture: ComponentFixture<YourOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourOrdersPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
