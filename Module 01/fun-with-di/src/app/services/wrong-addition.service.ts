import { Injectable } from '@angular/core';
import { CommonInterface } from "./service-interface";
import { HistoryService } from './history.service';

@Injectable({
    providedIn: 'root'
})
export class WrongAdditionService implements CommonInterface {

    id: number; 

    constructor(private history: HistoryService) {
        this.id = Math.ceil(Math.random() * 1000000);
        console.log('Wrong Addition Service is created with id', this.id);
    }

    add(a: number, b: number): number {
        this.history.audit(`Wrongly Calculating the sum of ${a} and ${b}`);
        return a + b + 1;
    }
}