import { Component, Inject, Injector } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { GroupComponent } from '../group/group.component';
import { CommonInterface } from 'src/app/services/service-interface';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-clac',
  templateUrl: './clac.component.html',
  styleUrls: ['./clac.component.css'],
})
export class ClacComponent {

  constructor(protected additionService: AdditionService) {
    }

  result = -1;

  calc(a: number, b: number) {
    this.result = this.additionService.add(a, b);
  }
}



// Depenency Injection Terms / Participants
// 1. Consumer - CalcComponent
// 2. Request / Token - Addition Service
// 3. Injector - Collection, mapping between requests and results
// 4. Provider - The object that is responsible for the initial creation of response



// constructor() {

//   const myOwnAdditionService = new AdditionService();
//   myOwnAdditionService.id = 5000;


//   console.log('We are creating an injector');
//   const injector1 = Injector.create([
//     {
//       provide: AdditionService, 
//       useValue: myOwnAdditionService
//     }
//   ]);

//   const injector2 = Injector.create([
//     {
//       provide: AdditionService, 
//       useClass: AdditionService, 
//     }
//   ], injector1);
//   console.log('We are asking for an Addition Service');
//   this.additionService = injector2.get(AdditionService);
//   console.log(this.additionService);
//   this.additionService = injector1.get(AdditionService);
//   console.log(this.additionService);

// }
