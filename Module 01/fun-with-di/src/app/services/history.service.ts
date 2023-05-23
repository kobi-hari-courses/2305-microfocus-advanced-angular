import { Inject, Injectable, Optional } from '@angular/core';
import { HISTORY_PREFIX } from '../tokens/prefix.token';
import { TIMESTAMP } from '../tokens/timestamp.token';
import { LOGGER, LoggerFunction } from '../tokens/logger.token';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    private loggers: LoggerFunction[];

    constructor(
        @Inject(HISTORY_PREFIX) private prefix: string,
        @Inject(TIMESTAMP) private timeFactory: () => Date, 
        @Optional() @Inject(LOGGER) loggers: LoggerFunction[] | null
        ){
            console.log(loggers);
            this.loggers = loggers ?? [];
        }

    records: string[] = [];


    async audit(txt: string) {
        const str = `${this.prefix} ${this.timeFactory()} ${txt}`;
        this.records.push(str);
        for (const logger of this.loggers) {
            const val = logger(str);
            if (val instanceof Promise) {
                await val;
            }
        }
    }

    async init() {
        console.log('History service started initializtion');
        await new Promise(res => setTimeout(res, 6000));
        console.log('History service initialized');
    }
}
