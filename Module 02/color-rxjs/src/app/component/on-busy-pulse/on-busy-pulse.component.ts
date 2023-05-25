import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-busy-pulse',
  templateUrl: './on-busy-pulse.component.html',
  styleUrls: ['./on-busy-pulse.component.css']
})
export class OnBusyPulseComponent implements OnChanges {
  @Input()
  value: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.pulse();
  }


  pulse() {
    console.log('Ta dam');
  }

}
