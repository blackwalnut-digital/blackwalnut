import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarElemComponent } from './components/calendar/calendar-elem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FragmentScrollService } from './services/fragment-scroll.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    HeroComponent,
    VisibilityComponent,
    GetInTouchComponent,
    OurMissionComponent,
    ServicesComponent,
    ProcessComponent,
    FooterComponent,
    CalendarComponent,
    CalendarElemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FullCalendarModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [FragmentScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
