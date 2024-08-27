import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data) {
    this.http.post<any>('https://sy7hf9fww2.execute-api.us-east-1.amazonaws.com/Prod/send-email', { data }).subscribe({
      next: (response) => {
        console.log('Response from server:', response);
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
