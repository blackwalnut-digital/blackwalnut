import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calendar-elem',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarElemComponent implements OnInit {
  dataUrl: string = "https://calendly.com/blackwalnut-digital?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=181919&text_color=beb2a1&primary_color=beb2a1"

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
}
