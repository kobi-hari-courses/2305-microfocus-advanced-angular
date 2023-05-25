import { Component } from '@angular/core';
import { Observable, Observer, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createObserver(id: string): Observer<number> {
    return {
      next: val => console.log(`Observer ${id} next ${val}`), 
      complete: () => console.log(`Observer ${id} completes`), 
      error: err => console.log(`Observer ${id} error ${err}`)
    }
  }

  createOfObservable(): Observable<number> {
    return of(42);
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable(observer => {
        observer.next(42);
        setTimeout(() => observer.next(100), 1000);
        setTimeout(() => observer.next(200), 2000);
        setTimeout(() => observer.next(300), 4000);
        setTimeout(() => observer.next(400), 7000);
        setTimeout(() => observer.next(500), 9000);
        setTimeout(() => observer.complete(), 10000);


    });
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observable = this.createCustomObservable();

    console.log('Subscribing Observer A');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Subscribing Observer B');
      observable.subscribe(observerB);
    } , 2500);


  }
}
