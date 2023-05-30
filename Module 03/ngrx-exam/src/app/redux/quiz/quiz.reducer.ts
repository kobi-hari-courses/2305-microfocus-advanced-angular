import { createReducer, on } from '@ngrx/store';
import { INITIAL_QUIZ_STATE } from './quiz.state';
import { UserActions } from '../actions/user.actions';
import { currentQuestion } from './quiz.helpers';
import { ServiceActions } from '../actions/service.actions';

export const quizRecucer = createReducer(
  INITIAL_QUIZ_STATE,
  on(UserActions.reset, () => INITIAL_QUIZ_STATE),
  on(UserActions.answerCurrentQuestion, (state, action) => ({
    ...state,
    answers: [
      ...state.answers,
      {
        userAnswer: action.answerIndex,
        isCorrect: currentQuestion(state).correctAnswer === action.answerIndex,
      },
    ],
  })), 
  on(UserActions.generateNewQuestions, (state) => ({
    ...state, 
    status: 'Generating new questions, please wait...'
  })), 
  on(ServiceActions.newQuestionsGenerated, (state, action) => ({
    ...state, 
    questions: action.questions, 
    answers: [], 
    status: ''
  })), 
  on(ServiceActions.errorGeneratingQestions, (state, action) => ({
    ...state, 
    questions: [], 
    status: '',
    answers: [], 
    message: `Error while generating questions: ${action.error}`
  }))
);
