import { EMPTY, from, of } from 'rxjs';
import { catchError } from 'rxjs';
import { exhaustMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Question } from "src/app/models/question.model";
import { QuestionsService } from 'src/app/services/questions.service';
import { ExamStoreState } from './exam-store.state';
import { ensure } from './exam-store.helpers';
import { Observable } from 'rxjs';

@Injectable()
export class ExamStore extends ComponentStore<ExamStoreState> {
    constructor(private questionsService: QuestionsService) {
        super({
            questions: [
                questionsService.randomQuestion(), 
                questionsService.randomQuestion(), 
                questionsService.randomQuestion()
            ], 
            selectedQuestionIndex: 0
        });
        console.log('Creating a new store service');
    }

    selectQuestions$ = this.select(s => s.questions);
    selectSelectedQuestionIndex$ = this.select(s => s.selectedQuestionIndex);
    selectCurrentQuestion$ = this.select(this.selectQuestions$, this.selectSelectedQuestionIndex$, (all, index) => all[index]);
    selectCaptions$ = this.select(this.selectQuestions$, all => all.map(q => q.caption));


    move = this.updater((state, offset: number) => ensure({
        ...state, 
        selectedQuestionIndex: state.selectedQuestionIndex + offset
    }));

    resetQuestions = this.updater((state, questions: Question[]) => ensure({
        ...state, 
        questions: questions
    }));

    createNewExam = this.effect((input$: Observable<number>) => 
        input$.pipe(
            exhaustMap(val => from(this.questionsService.getNewQuestions(val)).pipe(
                tapResponse({
                    next: questions => {
                        console.log('next,', questions);    
                        this.resetQuestions(questions)
                    }, 
                    error: err => console.log('ERROR in observable') , 
                    complete: () => console.log('Completed!!!!')               
                }),     
            )), 
        )
    )




    viewModel$ = this.select({
        captions: this.selectCaptions$, 
        current: this.selectCurrentQuestion$
    });
}
