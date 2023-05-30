import { ALL_QUESTIONS } from "src/app/models/all-questions";
import { Answer } from "src/app/models/answer.mode";
import { Question } from "src/app/models/question.model";

export const QuizFeatureKey = 'quiz';

export interface QuizState {
    readonly questions: Question[], 
    readonly answers: Answer[], 
    readonly status: string;
    readonly message: string;
}

export const INITIAL_QUIZ_STATE: QuizState = {
    questions: ALL_QUESTIONS, 
    answers: [], 
    status: '', 
    message: ''
}