import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Pages } from '../models/page-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl: string = "assets/data/content.json";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<Pages>(this.dataUrl)
    .pipe(
      map(data => {return data;}),
      catchError(error => {
        console.error('Error fetching data.', error);
        throw error;
      })
    );
  }
}
