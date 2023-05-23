import { Component, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number-spinner',
  templateUrl: './number-spinner.component.html',
  styleUrls: ['./number-spinner.component.css'], 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: NumberSpinnerComponent,
      multi: true, 
    }
  ]
})
export class NumberSpinnerComponent implements ControlValueAccessor {

  @Input() change = 1;
  @Input() max = 500;
  @Input() min = 0;

  currentValue = 0;

  private changeCallback: (v: number) => void = v => {};
  private touchedCallback: () => void = () => {};
  private numberOfChanges = 0;

  @HostBinding('class.we-are-shut-down')
  isDisabled = false;



  inc() {
    if (this.isDisabled) return;
    this.currentValue = Math.min(this.max, this.currentValue + Math.abs(this.change));
    this.onChange();
  }

  dec() {
    if (this.isDisabled) return;
    this.currentValue = Math.max(this.min, this.currentValue - Math.abs(this.change));
    this.onChange();
  }

  onChange() {
    this.changeCallback(this.currentValue);
    this.numberOfChanges ++;
    if (this.numberOfChanges === 3) this.touchedCallback();
  }


  writeValue(obj: any): void {
    console.log('Write Value', obj);
    this.currentValue = Number(obj);
  }

  registerOnChange(fn: (v: number) => void): void {
    this.changeCallback = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.touchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('Set disabled to ', isDisabled);
    this.isDisabled = isDisabled;
  }


}
