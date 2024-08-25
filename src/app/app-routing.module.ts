import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'book-a-call', component: CalendarComponent},
  {path: 'services', component: ServicesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 50],
    initialNavigation: 'enabledBlocking',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
