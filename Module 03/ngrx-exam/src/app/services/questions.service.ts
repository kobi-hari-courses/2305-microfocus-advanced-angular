import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private counter = 0;

  constructor() { }

  delay(millis: number): Promise<void> {
    return new Promise(res => setTimeout(res, millis));
  }

  randomQuestion(): Question {
    const a1 = Math.round(Math.random()* 10 + 2);
    const a2 = Math.round(Math.random()* 10 + 2);
    const diff = Math.round(Math.random()* 2 + 2);
    const correct = Math.floor(Math.random() * 4);

    return {
      caption: `How much is ${a1} + ${a2}`, 
      correctAnswer: correct, 
      answers: [0, 1, 2, 3].map(i => ((i - correct) * diff + a1 + a2).toString())
    }

  }

  async getNewQuestions(): Promise<Question[]> {
    this.counter++;

    if (this.counter == 3) {
      throw 'ERROR - you cannot generate more than 2 exams'
    }
    console.log('Generating new Questions');
    await this.delay(3000);

    console.log('Finished Generating new questions');
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => this.randomQuestion());
    
  }


}
