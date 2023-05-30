import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, concatMap, exhaustMap, from, interval, map, mergeAll, of, tap } from "rxjs";
import { QuestionsService } from "src/app/services/questions.service";
import { UserActions } from "../actions/user.actions";
import { ServiceActions } from "../actions/service.actions";

@Injectable()
export class QuestionsEffects {
    constructor(
        private actions$: Actions,
        private service: QuestionsService, 

    ){}

    loadQuestionsEffect$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UserActions.generateNewQuestions), 
            exhaustMap(_ => from(this.service.getNewQuestions()).pipe(
                map(questions => ServiceActions.newQuestionsGenerated({questions})), 
                catchError(err => of(ServiceActions.errorGeneratingQestions({error: err})))
            )),   
        )   
    );

}