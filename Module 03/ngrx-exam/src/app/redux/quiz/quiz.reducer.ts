import { createReducer } from "@ngrx/store";
import { INITIAL_QUIZ_STATE } from "./quiz.state";

export const quizRecucer = createReducer(INITIAL_QUIZ_STATE);