import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishCartModalComponent } from './publish-cart-modal.component';

describe('PublishCartModalComponent', () => {
  let component: PublishCartModalComponent;
  let fixture: ComponentFixture<PublishCartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishCartModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
