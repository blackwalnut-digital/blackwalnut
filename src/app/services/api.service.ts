import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getCalendarAvailableSlotsForDay(day: string): Observable<any> {
    return this.http.get<any>('${this.apiUrl}/appointments/available-time-slots?day=${day}')
  }
}
