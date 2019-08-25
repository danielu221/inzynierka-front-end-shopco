import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBtnComponent } from './icon-btn.component';

describe('IconBtnComponent', () => {
  let component: IconBtnComponent;
  let fixture: ComponentFixture<IconBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
