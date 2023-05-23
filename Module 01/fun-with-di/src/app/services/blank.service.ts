import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlankService {

  constructor() { }

  calculateTheComplexNumber() {
    return 2.718;
  }
}
