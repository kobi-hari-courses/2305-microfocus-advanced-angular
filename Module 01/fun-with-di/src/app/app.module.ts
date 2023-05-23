import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClacComponent } from './components/clac/clac.component';
import { AdditionService } from './services/addition.service';
import { GroupComponent } from './components/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    ClacComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdditionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
