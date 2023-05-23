import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    displayName: new FormControl('', Validators.required), 
    age: new FormControl(110, Validators.max(120)), 
    nickname: new FormControl('', Validators.required), 
  });

  toggleDisable() {
    if (this.form.disabled) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }
}
