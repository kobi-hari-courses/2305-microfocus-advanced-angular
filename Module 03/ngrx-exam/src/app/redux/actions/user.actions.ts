import { createAction, props } from "@ngrx/store";

export const UserActions = {
    reset: createAction('[User] Reset'), 
    answerCurrentQuestion: createAction('[User] Answer Current Question', props<{answerIndex: number}>() ), 
    generateNewQuestions: createAction('[User] Generate New Questions'), 
    fake: createAction('FAKE!!!')
}





