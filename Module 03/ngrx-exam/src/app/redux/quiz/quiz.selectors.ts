import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuizFeatureKey, QuizState } from "./quiz.state";

export const selectFeature = createFeatureSelector<QuizState>(QuizFeatureKey);

export const selectAllQuestions = createSelector(selectFeature, state => state.questions);

export const selectAllAnswers = createSelector(selectFeature, state => state.answers);

export const selectCurrentQuestionIndex = createSelector(selectAllAnswers, all => all.length);

export const selectCurrentQuestion = createSelector(selectAllQuestions, selectCurrentQuestionIndex, 
    (all, index) => all[index]
    );

export const selectStatus = createSelector(selectFeature, state => state.status);

export const selectIsBusy = createSelector(selectStatus, status => status.length > 0);

export const selectMessage = createSelector(selectFeature, state => state.message);