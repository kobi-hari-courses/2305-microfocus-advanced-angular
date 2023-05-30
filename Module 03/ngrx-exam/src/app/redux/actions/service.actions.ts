import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/models/question.model';
export const ServiceActions = {
    newQuestionsGenerated: createAction('[Service] New Questions Generated', 
        props<{questions: Question[]}>()
                ), 
    errorGeneratingQestions: createAction('[Service] Error Generating Questions', props<{error: any}>())
}