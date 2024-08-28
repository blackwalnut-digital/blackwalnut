import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = "https://sy7hf9fww2.execute-api.us-east-1.amazonaws.com/Prod/send-email";

    this.http.post<any>(url, data, { headers }).subscribe({
      next: (response) => {
        console.log('Response from server:', response);
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
