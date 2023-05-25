import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterEditorComponent } from './components/counter-editor/counter-editor.component';
import { CounterReaderComponent } from './components/counter-reader/counter-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterEditorComponent,
    CounterReaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
