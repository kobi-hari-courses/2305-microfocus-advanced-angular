import { Subscription } from 'rxjs';
import { CounterService } from './../../services/counter.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  value: number = -1;
  sub!: Subscription;

  constructor(private counterService: CounterService){}
  ngOnInit(): void {
    this.sub = this.counterService.getValue().subscribe(val => {
      this.value = val;
      console.log('My value has changed to ', val);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



}
