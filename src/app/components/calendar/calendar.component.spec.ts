import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarElemComponent } from './calendar-elem.component';

describe('CalendarComponent', () => {
  let component: CalendarElemComponent;
  let fixture: ComponentFixture<CalendarElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarElemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
