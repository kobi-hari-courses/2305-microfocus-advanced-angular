import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './redux/actions/user.actions';
import { Router } from '@angular/router';
import { QuestionsService } from './services/questions.service';
import { QuizSelectors } from './redux/quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isBusy$ = this.store.select(QuizSelectors.selectIsBusy);
  status$ = this.store.select(QuizSelectors.selectStatus);
  message$ = this.store.select(QuizSelectors.selectMessage);


  constructor(
    private store: Store,
    private router: Router){}

  reset() {
    const action = UserActions.reset();
    this.store.dispatch(action);
  }

  goToAdmin() {
    this.router.navigate(['admin']);
  }

  async generateNewQuestions() {
    const action = UserActions.generateNewQuestions();
    this.store.dispatch(action);
  }

}
