import { Component, InputSignal, OnInit, Signal, WritableSignal, computed, input, signal } from '@angular/core';
import { DateTime, HourNumbers, Info, Interval } from 'luxon';
import { Meetings } from './meetings.interface';

@Component({
  selector: 'app-calendar-elem',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarElemComponent implements OnInit {
  availableSlots: WritableSignal<Interval[]> = signal(null);
  meetings: InputSignal<Meetings> = input.required();
  today: Signal<DateTime> = signal(DateTime.local());
  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(this.today().startOf('month'));
  activeDay: WritableSignal<DateTime | null> = signal(null);
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));
  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week'),
    )
      .splitBy({ day: 1 })
      .map((d) => {
        if (d.start === null) {
          throw new Error('Wrong dates');
        }
        return d.start;
      });
  });

  busySlots: WritableSignal<Interval[]> = signal([]);

  DATE_MED = DateTime.DATE_MED;
  activeDayMeetings: Signal<string[]> = computed(() => {
    const activeDay = this.activeDay();
    if (activeDay === null) {
      return [];
    }
    const activeDayISO = activeDay.toISODate();

    if (!activeDayISO) {
      return [];
    }

    return this.meetings()[activeDayISO] ?? [];
  });

  constructor() { }

  ngOnInit(): void {
  }

  goToPreviousMonth(): void {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().minus({ month: 1 }),
    );
  }

  goToNextMonth(): void {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().plus({ month: 1 }),
    );
  }

  goToToday(): void {
    this.firstDayOfActiveMonth.set(this.today());
  }

  viewTimeSlotsForSelectedDay(dayOfMonth: DateTime): void {
    this.activeDay.set(dayOfMonth);

    console.log(this.busySlots().length);

    this.availableSlots.set(
      Interval
        .fromDateTimes(dayOfMonth.startOf('day').plus({hour: 8}), dayOfMonth.endOf('day').minus({hour: 7}))
        .splitBy({minute: 30})
        .map(d => {
          if(!this.isBusy(d)) {
            return d;
          }
        }));
  }

  isBusy(interval: Interval): boolean {
    let result = false;

    this.busySlots().forEach(x => {
      if(x.start.hour === interval.start.hour &&
        x.start.minute === interval.start.minute &&
        x.end.hour === interval.end.hour &&
        x.end.minute === interval.end.minute) {
        result = true;
      } else {
        result = false;
      }
    });

    return result;
  }

  addBusyTimeSlot(interval: Interval): void {
    let intervals = this.busySlots();
    intervals.push(interval);
    this.busySlots.set(intervals);
    this.availableSlots.set(this.availableSlots().filter(x => x != interval));
  }

}
