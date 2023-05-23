import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    records: string[] = [];


    audit(txt: string) {
        this.records.push(txt);
        console.log(this.records);
    }
}
