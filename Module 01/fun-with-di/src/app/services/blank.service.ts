import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlankService {

  constructor(private http: HttpClient) { }

  calculateTheComplexNumber() {
    return 2.718;
  }

  async init() {
    console.log('Blank Service Init started');
    await new Promise(res => setTimeout(res, 1000));
    console.log('Blank Service Init completed');

  }

  async getData() : Promise<Object> {
    const random = Math.random().toString();
    const url = `http://localhost:4200/assets/data.json?random=${random}`;
    const res = await firstValueFrom(this.http.get<Object>(url));
    return res;
  }
}
