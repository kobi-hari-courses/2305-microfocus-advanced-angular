import { Question } from "src/app/models/question.model";

export interface ExamStoreState {
    readonly questions: Question[], 
    readonly selectedQuestionIndex: number;
}
