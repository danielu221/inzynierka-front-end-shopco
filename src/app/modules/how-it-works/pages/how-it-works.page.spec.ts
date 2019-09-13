import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  HowItWorksPage } from './how-it-works.page';

describe('HowItWorksComponent', () => {
  let component: HowItWorksPage;
  let fixture: ComponentFixture<HowItWorksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
