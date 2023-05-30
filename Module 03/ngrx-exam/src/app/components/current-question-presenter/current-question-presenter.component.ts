import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from 'src/app/redux/actions/user.actions';
import { QuizSelectors } from 'src/app/redux/quiz';

@Component({
  selector: 'app-current-question-presenter',
  templateUrl: './current-question-presenter.component.html',
  styleUrls: ['./current-question-presenter.component.scss']
})
export class CurrentQuestionPresenterComponent {
  constructor(private store: Store){}

  question$ = this.store.select(QuizSelectors.selectCurrentQuestion);

  answerCurrentQuestion(index: number) {
    const action = UserActions.answerCurrentQuestion({answerIndex: index});
    this.store.dispatch(action);
  }



}
