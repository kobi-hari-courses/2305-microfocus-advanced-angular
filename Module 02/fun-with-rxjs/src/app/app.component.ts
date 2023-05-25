import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Observer, ReplaySubject, Subject, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShowingReader = true;

  toggle() {
    this.isShowingReader = !this.isShowingReader;
  }


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

  createHotCustomObservable(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 4000);
    setTimeout(() => subject.next(400), 7000);
    setTimeout(() => subject.next(500), 9000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createBehaviorCustomObservable(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 4000);
    setTimeout(() => subject.next(400), 7000);
    setTimeout(() => subject.next(500), 9000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createReplayCustomObservable(): Observable<number> {
    const subject = new ReplaySubject<number>(2);

    subject.next(42);

    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 4000);
    setTimeout(() => subject.next(400), 7000);
    setTimeout(() => subject.next(500), 9000);
    setTimeout(() => subject.complete(), 10000);
    setTimeout(() => subject.next(1000), 12000);

    return subject;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');
    const observable = this.createReplayCustomObservable();

    console.log('Subscribing Observer A');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Subscribing Observer B');
      observable.subscribe(observerB);
    } , 2500);

    setTimeout(() => {
      console.log('Subscribing Observer C');
      observable.subscribe(observerC);
    }, 12000);


  }
}
