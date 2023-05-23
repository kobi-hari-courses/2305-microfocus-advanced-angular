import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClacComponent } from './components/clac/clac.component';
import { AdditionService } from './services/addition.service';
import { GroupComponent } from './components/group/group.component';
import { WrongAdditionService } from './services/wrong-addition.service';
import { HISTORY_PREFIX } from './tokens/prefix.token';
import { TIMESTAMP } from './tokens/timestamp.token';
import { COMPLEX } from './tokens/complex.token';
import { ComplexViewerComponent } from './components/complex-viewer/complex-viewer.component';
import { BlankService } from './services/blank.service';

@NgModule({
  declarations: [
    AppComponent,
    ClacComponent,
    GroupComponent,
    ComplexViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: AdditionService, 
      useExisting: WrongAdditionService
    }, 
    {
      provide: HISTORY_PREFIX, 
      useValue: 'INFO'
    }, 
    {
      provide: TIMESTAMP, 
      useValue: () => new Date()
    }, 
    {
      provide: COMPLEX,
      useFactory: (blankService: BlankService) => blankService.calculateTheComplexNumber(), 
      deps: [BlankService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
