import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";
import { CommonInterface } from "./service-interface";

@Injectable()
export class AdditionService implements CommonInterface {

    id: number; 

    constructor(private history: HistoryService) {
        this.id = Math.ceil(Math.random() * 1000000);
        console.log('Addition Service is created with id', this.id);
    }

    add(a: number, b: number): number {
        this.history.audit(`Calculating the sum of ${a} and ${b}`);
        return a + b;
    }
}