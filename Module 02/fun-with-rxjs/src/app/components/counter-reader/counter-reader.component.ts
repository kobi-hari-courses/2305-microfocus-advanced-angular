import { Subscription, Observable } from 'rxjs';
import { CounterService } from './../../services/counter.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent {

  constructor(
    private counterService: CounterService, 
    ) {
    
  }

  value$: Observable<number> = this.counterService.getValue();

}
