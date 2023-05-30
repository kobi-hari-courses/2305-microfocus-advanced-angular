import { Question } from "src/app/models/question.model";
import { QuizState } from "./quiz.state";

export function currentQuestion(state: QuizState): Question {
    return state.questions[state.answers.length];
}