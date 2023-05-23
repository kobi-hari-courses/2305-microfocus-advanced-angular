import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClacComponent } from './components/clac/clac.component';
import { AdditionService } from './services/addition.service';
import { GroupComponent } from './components/group/group.component';
import { WrongAdditionService } from './services/wrong-addition.service';
import { HISTORY_PREFIX } from './tokens/prefix.token';

@NgModule({
  declarations: [
    AppComponent,
    ClacComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: AdditionService, 
      useClass: WrongAdditionService
    }, 
    {
      provide: HISTORY_PREFIX, 
      useValue: 'INFO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
