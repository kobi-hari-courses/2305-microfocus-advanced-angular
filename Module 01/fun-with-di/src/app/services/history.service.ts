import { Inject, Injectable } from '@angular/core';
import { HISTORY_PREFIX } from '../tokens/prefix.token';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor(
        @Inject(HISTORY_PREFIX) private prefix: string
        ){}

    records: string[] = [];


    audit(txt: string) {
        this.records.push(`${this.prefix} ${txt}`);
        console.log(this.records);
    }
}
