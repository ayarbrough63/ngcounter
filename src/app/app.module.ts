import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponent } from './counter-detail/counter-detail.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';
import { ColossalComponent } from './colossal/colossal.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponent,
    SuperCounterComponent,
    SuperDuperComponent,
    ColossalComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
