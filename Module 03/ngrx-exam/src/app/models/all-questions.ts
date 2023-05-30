import { Question } from "./question.model";

export const ALL_QUESTIONS: Question[] = [
    {
        caption: 'What do you get when you add Red to Green and Blue?', 
        answers: ['Black', 'Gray', 'White', 'Brown'], 
        correctAnswer: 2
    }, 
    {
        caption: 'What do you get when you add Red to Black?', 
        answers: ['Dark Red', 'Red', 'Black', 'Gray'], 
        correctAnswer: 1
    }, 
    {
        caption: 'What do you get when you add Blue to Red?', 
        answers: ['Magenta', 'Cyan', 'Purple', 'White'], 
        correctAnswer: 0
    }, 
    {
        caption: 'What do you get when you add Blue to Green?', 
        answers: ['Magenta', 'Cyan', 'White', 'Teal'], 
        correctAnswer: 1
    }, 
    {
        caption: 'What do you get when you add Red to Green?', 
        answers: ['Brown', 'White', 'Orange', 'Yellow'], 
        correctAnswer: 3
    }, 
    {
        caption: 'What do you get when you add Red to Cyan?', 
        answers: ['Magenta', 'Blue', 'White', 'Purple'], 
        correctAnswer: 2
    }, 
    {
        caption: 'What do you get when you add Yellow to Blue?', 
        answers: ['Green', 'Cyan', 'White', 'Lime'], 
        correctAnswer: 2
    }, 
    {
        caption: 'What do you get when you add Green to Magenta?', 
        answers: ['Brown', 'Yellow', 'White', 'Orange'], 
        correctAnswer: 2
    }, 
    {
        caption: 'What do you get when you add 30% Green to 30% Blue and 30% Red?', 
        answers: ['Black', '30% Gray', '90% Gray', 'White'], 
        correctAnswer: 1
    }, 
    {
        caption: 'What do you need to do, to get from Yellow to Green?', 
        answers: ['Add Green', 'Subtract Red', 'Add Blue', 'Nothing'], 
        correctAnswer: 1
    }

]