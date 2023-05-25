import { Color } from './../models/color.model';
import { Injectable } from '@angular/core';
import { ALLCOLORS } from '../models/all-colors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  readonly colors: Color[] = Object
    .entries(ALLCOLORS)
    .map(entry => ({code: entry[0], displayName: entry[1]}))


  async search(keyword: string): Promise<Color[]> {
    if (!keyword) return [];

    console.log('Starting search for ', keyword);
    keyword = keyword.toLowerCase();

    await new Promise(res => setTimeout(res, 3000));

    console.log('Completed search for ', keyword);

    return this.colors
      .filter(clr => clr.displayName.toLowerCase().includes(keyword));
  }
  

 searchCold(keyword: string) {
    return new Observable<Color[]>(observer => {
      this.search(keyword).then(res => observer.next(res));
    })
  }

  constructor() { }

}
