import { Component } from '@angular/core';
import { Observable, Subject, concatAll, distinctUntilChanged, filter, interval, map, merge, mergeAll, of, switchAll, take } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  search$ = new Subject<string>();
  results$!: Observable<Color[]>;
  isBusy$!: Observable<boolean>;
  
  constructor(private colorsService: ColorsService) {
    const res$ = this.search$.pipe(
      map(keyword => this.colorsService.search(keyword)), 
      switchAll()
      )

    this.results$ = res$;


    const true$ = this.search$.pipe(
      map(_ => true)
    );

    const false$ = this.results$.pipe(
      map(_ => false)
    );

    this.isBusy$ = merge(true$, false$).pipe(
      distinctUntilChanged()
    );

     
  }



  // log<T>(observable: Observable<T>, prefix: string) {
  //   observable.subscribe({
  //     next: val => console.log(`${prefix} next ${val}`), 
  //     complete: () => console.log(`${prefix} complete`), 
  //     error: err => console.log(`${prefix} error ${err}`), 
  //   })
  // }


  // go() {
  //   const input$ = interval(1000);
  //   this.log(input$, 'input');

  //   const take$ = input$.pipe(
  //     take(3)
  //   )
  //   this.log(take$, 'take');

  // }
}
