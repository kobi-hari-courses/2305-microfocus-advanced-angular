import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlankService {

  constructor() { }

  calculateTheComplexNumber() {
    return 2.718;
  }

  async init() {
    console.log('Blank Service Init started');
    await new Promise(res => setTimeout(res, 3000));
    console.log('Blank Service Init completed');

  }
}
