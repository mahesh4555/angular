import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedOutScreenComponent } from './logged-out-screen.component';

describe('LoggedOutScreenComponent', () => {
  let component: LoggedOutScreenComponent;
  let fixture: ComponentFixture<LoggedOutScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedOutScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedOutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
