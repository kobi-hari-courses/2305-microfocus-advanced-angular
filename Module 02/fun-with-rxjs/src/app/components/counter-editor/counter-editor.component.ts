import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-editor',
  templateUrl: './counter-editor.component.html',
  styleUrls: ['./counter-editor.component.css']
})
export class CounterEditorComponent {
  constructor(private counterService: CounterService){}

  inc() {
    this.counterService.increment();
  }

  dec() {
    this.counterService.decrement();
  }

}
