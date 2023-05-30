import { ExamStoreState } from "./exam-store.state";

const ENSURERS = [
    ensureCurrentLowerBoundaries, 
    ensureCurrentUpperBounraries
];

export function ensure(state: ExamStoreState): ExamStoreState {
    for (const ensurer of ENSURERS) {
        state = ensurer(state);
    }

    return state;
}

export function ensureCurrentLowerBoundaries(state: ExamStoreState): ExamStoreState {
    if (state.selectedQuestionIndex >= 0) return state;
    return {
        ...state, 
        selectedQuestionIndex: 0    
    }
}

export function ensureCurrentUpperBounraries(state: ExamStoreState): ExamStoreState {
    if (state.selectedQuestionIndex < state.questions.length) return state;
    return {
        ...state, 
        selectedQuestionIndex: state.questions.length - 1
    }
}