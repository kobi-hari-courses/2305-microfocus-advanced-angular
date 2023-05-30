import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './redux/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store){}

  reset() {
    const action = UserActions.reset();
    this.store.dispatch(action);
  }

}
