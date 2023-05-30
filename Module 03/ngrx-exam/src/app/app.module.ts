import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { QuizFeatureKey } from './redux/quiz/quiz.state';
import { quizRecucer } from './redux/quiz/quiz.reducer';
import { CurrentQuestionPresenterComponent } from './components/current-question-presenter/current-question-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentQuestionPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    StoreModule.forRoot(), 
    StoreModule.forFeature(QuizFeatureKey, quizRecucer),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
