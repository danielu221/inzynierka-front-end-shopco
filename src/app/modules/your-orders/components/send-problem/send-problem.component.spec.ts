import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProblemComponent } from './send-problem.component';

describe('SendProblemComponent', () => {
  let component: SendProblemComponent;
  let fixture: ComponentFixture<SendProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
