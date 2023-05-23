import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { FAVORITE_COLOR } from './tokens/color.token';
import { FirstModule } from './first.module';
import { SecondModule } from './second.module';
import { HistoryService } from './services/history.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LogInterceptor } from './interceptors/log.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ClacComponent,
    GroupComponent,
    ComplexViewerComponent,
  ],
  imports: [
    BrowserModule, 
    FirstModule, 
    SecondModule, 
    HttpClientModule
  ],
  providers: [
    {
      provide: AdditionService,
      useExisting: WrongAdditionService,
    },
    {
      provide: HISTORY_PREFIX,
      useValue: 'INFO',
    },
    {
      provide: TIMESTAMP,
      useValue: () => new Date(),
    },
    {
      provide: COMPLEX,
      useFactory: (blankService: BlankService) =>
        blankService.calculateTheComplexNumber(),
      deps: [BlankService],
    },
    {
      provide: FAVORITE_COLOR, 
      useValue: 'green', 
      multi: true
    }, 
    {
      provide: APP_INITIALIZER, 
      useFactory: (historyService: HistoryService) => () => historyService.init(),
      multi: true, 
      deps: [HistoryService]
    }, 
    {
      provide: APP_INITIALIZER, 
      useFactory: (service: BlankService) => () => service.init(),
      multi: true, 
      deps: [BlankService]
    }, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LogInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
