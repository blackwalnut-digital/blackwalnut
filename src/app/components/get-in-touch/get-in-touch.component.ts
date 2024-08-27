import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      businessName: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.emailService.sendEmail(this.emailForm.value);
  }
}
