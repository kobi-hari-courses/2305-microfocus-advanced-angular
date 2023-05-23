import { Inject, Injectable } from '@angular/core';
import { HISTORY_PREFIX } from '../tokens/prefix.token';
import { TIMESTAMP } from '../tokens/timestamp.token';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor(
        @Inject(HISTORY_PREFIX) private prefix: string,
        @Inject(TIMESTAMP) private timeFactory: () => Date
        ){}

    records: string[] = [];


    audit(txt: string) {
        this.records.push(`${this.prefix} ${this.timeFactory()} ${txt}`);
        console.log(this.records);
    }
}
