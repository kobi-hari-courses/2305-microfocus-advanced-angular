import { interval, map } from 'rxjs';
import { ExamStore } from './store/exam-store.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-editor',
  templateUrl: './exam-editor.component.html',
  styleUrls: ['./exam-editor.component.scss'], 
  providers: [ExamStore]
})
export class ExamEditorComponent {
  vm$ = this.store.viewModel$;

  time$ = interval(2000).pipe(map(_ => 1))

  constructor(private store: ExamStore){
    this.store.move(this.time$);
  }


  nextQuestion() {
    this.store.move(1);
  }

  prevQuestion() {
    this.store.move(-1);
  }

  createNewExam() {
    this.store.createNewExam(7);
  }


  

}
