import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnBusyPulseComponent } from './component/on-busy-pulse/on-busy-pulse.component';

@NgModule({
  declarations: [
    AppComponent,
    OnBusyPulseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
