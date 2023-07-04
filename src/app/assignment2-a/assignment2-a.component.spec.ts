import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2AComponent } from './assignment2-a.component';

describe('Assignment2AComponent', () => {
  let component: Assignment2AComponent;
  let fixture: ComponentFixture<Assignment2AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment2AComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment2AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
